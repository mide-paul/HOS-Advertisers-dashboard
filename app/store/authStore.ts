'use client';
import { create } from "zustand";
import axios from "axios";

const API_URL = "https://api.hosoptima.com";

//to solve cors error
//axios.defaults.withCredentials = true;

interface IAuth {
    user: null;
    error: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signup: (companyEmail: string, password: string, companyName: string) => Promise<void>;
    login: (companyEmail: string, password: string) => Promise<void>;
	isCheckingAuth: boolean;
	checkAuth: (isCheckingAuth: boolean, error: string) => Promise<void>;
}

export const useAuthStore = create<IAuth>((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	signup: async (companyEmail: any, password: any, companyName: any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/api/v1/enterprise`, { companyEmail, password, companyName });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error: any) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (companyEmail: any, password: any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/api/v1/enterprise/auth`, { companyEmail, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error: any) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	// logout: async () => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		await axios.post(`${API_URL}/logout`);
	// 		set({ user: null, isAuthenticated: false, error: null, isLoading: false });
	// 	} catch (error) {
	// 		set({ error: "Error logging out", isLoading: false });
	// 		throw error;
	// 	}
	// },
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
	// forgotPassword: async (email: any) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/forgot-password`, { email });
	// 		set({ message: response.data.message, isLoading: false });
	// 	} catch (error: any) {
	// 		set({
	// 			isLoading: false,
	// 			error: error.response.data.message || "Error sending reset password email",
	// 		});
	// 		throw error;
	// 	}
	// },
	// resetPassword: async (token: any, password: any) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
	// 		set({ message: response.data.message, isLoading: false });
	// 	} catch (error: any) {
	// 		set({
	// 			isLoading: false,
	// 			error: error.response.data.message || "Error resetting password",
	// 		});
	// 		throw error;
	// 	}
	// },
}));