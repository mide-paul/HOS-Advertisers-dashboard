'use client';
import { create } from "zustand";
import axios from "axios";

const API_URL = "https://api.hosoptima.com";

//to solve cors error
//axios.defaults.withCredentials = true;

type User = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	profilePicture: string;
};

interface IAuth {
	user: User | null;
	setUser: (user: User) => void;
	error: string | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	message: null;
	signup: (email: string, password: string, firstName: string, lastName: string, phone: string) => Promise<void>;
	login: (email: string, password: string) => Promise<User>;
	isCheckingAuth: boolean;
	checkAuth: (isCheckingAuth: boolean, error: string) => Promise<void>;
	logout: (isLoading: boolean, error: string) => Promise<void>;
	forgotPassword: (email: string) => Promise<void>;
}

export const useAuthStore = create<IAuth>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	signup: async (email: string, password: string, firstName: string, lastName: string, phone: string) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/api/v1/ad-manager/register`, { email, password, firstName, lastName, phone });
			set({
				user: response.data.data,
				isAuthenticated: true,
				isLoading: false
			});
		} catch (error: any) {
			set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (email, password) => {
		try {
			const response = await axios.post(`${API_URL}/api/v1/ad-manager/login`, { email, password });
			set({ user: response.data.data, isAuthenticated: true });
			return response.data.data;
		} catch (error: any) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},
	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/api/v1/ad-manager/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
	forgotPassword: async (email: any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/api/v1/ad-manager/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error: any) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},
	// resetPassword: async (token: any, password: any) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/api/v1/ad-manager/reset-password`, { password });
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