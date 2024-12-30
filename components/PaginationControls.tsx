// 'use client'

// import { FC } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'

// interface PaginationControlsProps {
//   hasNextPage: boolean
//   hasPrevPage: boolean
// }

// const PaginationControls: FC<PaginationControlsProps> = (
//   {
//     hasNextPage,
//     hasPrevPage,
//   }
// ) => {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const page = searchParams.get('page') ?? '1'
//   const per_page = searchParams.get('per_page') ?? '1'

//   return (
//     <div className='flex gap-20 lg:-mt-24 lg:ml-6'>
//       <button
//         className='text-blue lg:pt-0.6 lg:text-center lg:h-6 lg:w-14 lg:text-sm lg:font-semibold transparent rounded shadow cursor-pointer'
//         disabled={!hasPrevPage}
//         onClick={() => {
//           router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
//         }}>
//         Previous
//       </button>

//       <div>
//         {page} / {Math.ceil(10 / Number(per_page))}
//       </div>

//       <button
//         className='text-blue lg:pt-0.6 lg:text-center lg:h-6 lg:w-14 lg:text-sm lg:font-semibold transparent rounded shadow cursor-pointer'
//         disabled={!hasNextPage}
//         onClick={() => {
//           router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
//         }}>
//         Next
//       </button>
//     </div>
//   )
// }

// export default PaginationControls