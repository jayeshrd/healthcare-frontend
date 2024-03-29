// export default function Banner() {
//   return (
//     <div className="w-screen h-[400px] bg-blue-500 my-8 p-8">
//       <p className="font-Proxima-Nova font-medium text-2xl md:text-3xl flex flex-row justify-center">
//         Meet our Doctors
//       </p>
//     </div>
//   );
// }
import { useState } from 'react';
// import img1 from '../../../public/DoctorImage1.jpeg';
// import img2 from '../../../public/DoctorImage2.jpeg';
import BookConsultationForm from '../BookConsultationForm/BookConsultationForm';
// import imgUrlnew from "/finallogo24.jpg";


export default function Banner() {
  const posts = [
    {
      title: "Dr. Zara Ahmed",
      img: "DoctorImage3.jpeg",
      content:
        "MBBS (2016) DNB, EMERGENCY MEDICINE(JUNE 2020 SESSION), INDRAPRASTHA APOLLO HOSPITAL, DELHI ",
      price: "999"
    },
    {
      title: "Dr. Vipin Kumar",
      img: '/DoctorImage1.jpeg',
      content:
        "MBBS,DNB-EM (Apollo Hospital,New Delhi),MNAMS FACEE(AIIMS,NEW DELHI),FAGE CONSULTANT",
      price: "499"
    },
    {
      title: " Dr. Mohd Faizan",
      img: 'DoctorImage2.jpeg',
      content:
        "Degree: BPT (TMU), CCT, CDNT Physiotherapist, Place- Muscle stretch sports injuries and pain Clinic (Noida) ",
      price: "1499"
    },
   

  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false)


  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <div className="flex flex-col items-center py-16 gap-8 m-8">
        <h1 className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-blue-600">
          Meet our Doctors
        </h1>
        {/* <div className="grid gap-5 lg:grid-cols-3 ">
          {posts.map((items, key) => (
            <div className="w-full  shadow-md lg:max-w-sm " key={key}>
              <img
                className="object-cover w-full h-50 rounded-lg"
                src={items.img}
                alt="image"
              />
              <div className="p-4 h-40">
                <h4 className="text-xl font-semibold text-blue-600 text-center">
                  {items.title}
                </h4>
                <p className="mb-2 leading-normal text-center ">{items.content}</p>
         
              </div>
              <div className="m-2 flex items-center space-x-8">
                <button
                  onClick={openDialog}
                  className="px-5 py-3 text-sm border-blue-600 bg-blue-600 rounded shadow text-white"
                >
                  Book Video Consult
                </button>
                <button
                  onClick={openDialog}
                  className="px-5 py-3 text-sm border-blue-600 bg-blue-600 rounded shadow text-white"
                >
                   Hospital/Home Visit
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid gap-5 lg:grid-cols-3 ">
          {posts.map((items) => (
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="object-cover object-center w-full h-56" alt="avatar" src={items.img} />

              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">  {items.title}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">  {items.content}</p>

                {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 11H10V13H14V11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                    </svg>

                                    <h1 className="px-2 text-sm">Experiance 4-5 years</h1>
                                </div> */}

                {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                                    </svg>

                                    <h1 className="px-2 text-sm">{items.location}</h1>
                                </div> */}
                {/* <span className="relative flex items-center justify-center w-full text-xl m-2 items-bold h-full">Book  Consult Now</span> */}
                {/* <div className="flex flex-row sm:flex- space-y- sm:space-x-6 sm:space-y- m-4">
                  <a href="#_" className="relative mr- inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group" onClick={openDialog}>
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      <img src="/doctorConsultation.png" className="w-10 h-10" alt="Doctor Consultation" />
                      <span className="tab block hidden md:block text-xs text-center md:text-center" style={{ fontSize: '0.60rem' }}>Online </span>

                    </span>
                  </a>
                  <a href="#_" className="relative ml-2  inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group" onClick={openDialog}>
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      <img src="/hospitallogo.svg" className="w-10 h-10" alt="Hospital" />
                      <span className="tab block hidden md:block text-xs" style={{ fontSize: '0.60rem' }}>Hospital </span>
                    </span>
                  </a>
                  <a href="#_" className="relative ml-2 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group" onClick={openDialog}>
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      <img src="/doctorHome.svg" className="w-10 h-10" alt="Doctor Home" />
                      <span className="tab block hidden md:block text-xs text-center" style={{ fontSize: '0.60rem' }}>Home </span>
                    </span>
                  </a>
                </div> */}
                {/* <button
                  onClick={openDialog}
                  className="px-5 py-3 text-sm border-blue-600 bg-blue-600 rounded shadow text-white"
                >
                  Book Video Consult
                </button> */}
                <button onClick={openDialog} className="relative mt-2 inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-900 transition duration-300 ease-out border-2 border-indigo-900 rounded-full shadow-md group ">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-900 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute  flex items-center justify-center w-full h-full text-indigo-900 transition-all duration-300 transform group-hover:translate-x-full ease   "  > Consult Now</span>
                  <span className="relative invisible">Button Text</span>
                </button>



              </div>
            </div>
          ))}
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={closeDialog}
              ></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <BookConsultationForm />
            </div>
          </div>
        </div>
      )}

    </>
  );
}
{/* <p className="font-Proxima-Nova mb-4 font-medium text-2xl md:text-3xl flex flex-row justify-center">
   
   Meet our Doctors
 </p>
 <div className="grid gap-2 lg:grid-cols-4">
   {posts.map((items, key) => (
     <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
       <img
         className="object-cover w-full h-48"
         src={items.img}
         alt="image"
       />
       <div className="p-4">
         <h4 className="text-xl font-semibold text-blue-600">
           {items.title}
         </h4>
         <p className="mb-2 leading-normal">{items.content}</p>
         <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
           Read more
         </button>
       </div>
     </div>
   ))}
 </div> */}



// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
//   Tooltip,
//   IconButton,
// } from "@material-tailwind/react";

// export function Banner() {
//   return (
//     <>
//     <div className="w-screen h-[400px] bg-blue-500 my-8 p-8">
//       <p className="font-Proxima-Nova font-medium text-2xl md:text-3xl flex flex-row justify-center">
//         Meet our Doctors
//       </p>
//     </div>
//     <div className="w-full max-w-[26rem] shadow-lg">
//   <div className="bg-blue-gray relative">
//     <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="ui/ux review check" />
//     <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
//     <button className="absolute top-4 right-4 rounded-full text-red hover:bg-red-600 p-2">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
//         <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//       </svg>
//     </button>
//   </div>
//   <div className="p-6">
//     <div className="mb-3 flex items-center justify-between">
//       <h5 className="text-blue-gray font-medium">Wooden House, Florida</h5>
//       <div className="flex items-center gap-1.5 text-blue-gray">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-0.5 h-5 w-5 text-yellow-700">
//           <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
//         </svg>
//         5.0
//       </div>
//     </div>
//     <p className="text-gray">Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.</p>
//     <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
//       <div className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//           <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
//           <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" />
//           <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
//         </svg>
//       </div>

//     </div>
//   </div>
//   <div className="pt-3">
//     <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">Reserve</button>
//   </div>
// </div>
//     </>
//   );
// }

// const includedFeatures = [
//   'Private forum access',
//   'Member resources',
//   'Entry to annual conference',
//   'Official member t-shirt',
// ]

// export default function Banner() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl sm:text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
//             in. Explicabo id ut laborum.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
//           <div className="p-8 sm:p-10 lg:flex-auto">
//             <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
//             <p className="mt-6 text-base leading-7 text-gray-600">
//               Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
//               repellendus etur quidem assumenda.
//             </p>
//             <div className="mt-10 flex items-center gap-x-4">
//               <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
//               <div className="h-px flex-auto bg-gray-100" />
//             </div>
//             <ul
//               role="list"
//               className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
//             >
//               {includedFeatures.map((feature) => (
//                 <li key={feature} className="flex gap-x-3">
//                   <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//             <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
//               <div className="mx-auto max-w-xs px-8">
//                 <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
//                 <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                   <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
//                   <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Get access
//                 </a>
//                 <p className="mt-6 text-xs leading-5 text-gray-600">
//                   Invoices and receipts available for easy company reimbursement
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
