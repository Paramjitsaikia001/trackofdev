// import { useNavigate } from 'react-router-dom'
// import c_language from '../../assets/images/LanguageImage/c-programming-1.png'
// import cplusplus from '../../assets/images/LanguageImage/c-plus-plus-programming-language.jpg'
// import python from '../../assets/images/LanguageImage/python-language.jpg'
// import c_sharp from '../../assets/images/LanguageImage/C(Sharp).jpg'
// import java from '../../assets/images/LanguageImage/java.jpg'
// import rust from '../../assets/images/LanguageImage/rust.png'
// import typesript from '../../assets/images/LanguageImage/typescript.png'
// import SQL from '../../assets/images/LanguageImage/SQL.jpg'
// import Go from '../../assets/images/LanguageImage/go.jpg'
// import php from '../../assets/images/LanguageImage/php.jpg'
// import Javasript from '../../assets/images/LanguageImage/JavaScript.png'
// import Flutter from '../../assets/images/LanguageImage/flutter.png'
// import solidity from '../../assets/images/LanguageImage/solidity.jpg'
// import MobileNav from '../navigation/mobilenav'

// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

// export default function Language() {
//     const navigate = useNavigate();
//     const backbutton = () => {
//         navigate('/traintoexcellency/Frontend-build/');
//     }
//     return (
//         <section className="flex flex-col lg:w-[80%] w-[100%] h-[100%] gap-4">
//             <div className='flex justify-center'>
//                 <button
//                     onClick={() => backbutton()}
//                     className='ml-4 my-2 bg-[#eeecec] text-black px-3 py-0 border-1 border-gray-700 rounded-[4px] flex items-center'
//                 >
//                     <span class="material-symbols-outlined text-sm font-bold">
//                         arrow_back_ios
//                     </span>
//                     <span>Back</span>
//                 </button>
//                 <Header />
//             </div>
//             <div className='flex flex-col p-4 gap-8'>
//                 <div className="development flex flex-col">
//                     <div className='flex flex-col gap-4   text-[#FFFF]  border-gray-500'>
//                         <h2 className='flex gap-2 font-bold text-3xl'>
//                             <span>Hello</span>
//                             <span>Coders,</span>
//                         </h2>
//                         <h4 className="text-purple-400 text-xl">
//                             Welcome to your ultimate programming guide hub! Our website offers structured, easy-to-follow roadmaps for every programming language, helping you master coding from basics to advanced concepts. Start your journey with us today and join a passionate community of learners!
//                         </h4>
//                     </div>
//                 </div>
//                 <div className='language-container flex flex-wrap gap-6 py-4 border-t-2'>
//                     <div className="c_language flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg' src={c_language} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>C-Language</h3>
//                             <p className='text-sm italic'>C is a powerful and efficient programming language, widely used for system programming, developing operating systems, and embedded systems.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className=" cplusplus flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={cplusplus} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>C++</h3>
//                             <p className='text-sm italic'>C++ is a versatile, high-performance programming language that builds on C, enabling object-oriented programming and efficient system and application development.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="python flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={python} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>Python</h3>
//                             <p className='text-sm italic'>Python is a versatile and beginner-friendly programming language, known for its readability and wide range of applications, from web development to data science and machine learning</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="c_sharp flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={c_sharp} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>C#</h3>
//                             <p className='text-sm italic'>
//                                 C# is a versatile, object-oriented programming language developed by Microsoft for Windows applications, web services, and game development.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="rust flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={rust} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>Rust</h3>
//                             <p className='text-sm italic'>
//                                 Rust is a systems programming language focused on safety, speed, and concurrency. It eliminates many programming errors by ensuring memory safety without needing a garbage collector.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="java flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={java} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>Java</h3>
//                             <p className='text-sm italic'>
//                                 Java is a high-level, object-oriented programming language widely used for building platform-independent applications. It is known for its portability, robustness, and extensive libraries.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="SQL flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={SQL} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>SQL</h3>
//                             <p className='text-sm italic'>SQL (Structured Query Language) is a standard language used to manage and manipulate relational databases. It allows for querying, updating, and managing data efficiently in a structured format.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="javascript flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={Javasript} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>JavaScript</h3>
//                             <p className='text-sm italic'>JavaScript is a versatile, high-level programming language primarily used for web development to create dynamic and interactive web pages. It enables client-side scripting, making websites more engaging and user-friendly.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="typescript flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={typesript} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>TypeScript</h3>
//                             <p className='text-sm italic'>TypeScript is a statically-typed superset of JavaScript that adds optional static types, enhancing code quality and maintainability. It helps developers catch errors early and write more robust, scalable code.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="Solidity flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={solidity} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>Solidity</h3>
//                             <p className='text-sm italic'>Solidity is a high-level programming language designed for writing smart contracts on blockchain platforms like Ethereum. It enables the creation of decentralized applications (dApps) with complex transaction logic.</p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="go flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={Go} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>Go</h3>
//                             <p className='text-sm italic'>Go, also known as Golang, is an open-source programming language designed by Google for efficient, reliable, and scalable software. It's known for its simplicity, strong concurrency support, and excellent performance.
//                             </p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="php flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={php} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>php</h3>
//                             <p className='text-sm italic'>PHP is a widely-used open-source scripting language designed for web development. It is particularly well-suited for creating dynamic web pages and can be embedded directly into HTML.
//                             </p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>
//                     <div className="flutter flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
//                         <img className='w-[96%] border-0 rounded-lg h-36' src={Flutter} ></img>

//                         <div className='flex flex-col gap-2 items-center justify-between px-2'>
//                             <h3 className='font-bold'>Flutter</h3>
//                             <p className='text-sm italic'>Flutter is an open-source UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It is known for its fast development, expressive UI, and high performance.
//                             </p>
//                             <button className=' border-transparent bg-purple-700 rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <Footer />
//             <MobileNav />
//         </section>
//     )
// }