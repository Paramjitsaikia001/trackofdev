import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DBMSpage({ closeDBMS, Done }) {
   const Nexthandler = () => {
      Done();
      closeDBMS();
   }
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeDBMS();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeDBMS} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
            <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Database Management</h2>
            <div className="flex flex-col gap-1">
               <p><span className="text-[#23daff] font-bold">Database management</span>  involves storing, organizing, and retrieving data efficiently to support applications and websites. It ensures that data is consistently accessible, secure, and optimized for performance. Commonly used database management systems include relational databases like MySQL and PostgreSQL, and NoSQL databases like MongoDB. These systems allow developers to design schemas, perform queries, and handle large-scale data operations seamlessly.
               </p>
               <p>If a website were a human body, database management would be its memory, storing and recalling essential information when needed. It provides the foundation for dynamic applications like e-commerce sites, social networks, and content management systems.
               </p>
               <div className="flex flex-col my-5 gap-4">
                  <p className="flex flex-col gap-4">
                     <h2>Database Management Systems(DBMS) are broadly categorized into <i className="text-blue-500">two main types</i> based on their data models and structure:</h2>

                     <h3 className="font-bold">Relational DBMS (RDBMS):</h3>
                     <p > <h4 className="font-bold inline">Structure:</h4><p className="pl-4">Data is organized into tables (rows and columns) where relationships between tables are defined using keys (primary and foreign keys).</p>
                     </p>

                     <p > <h4 className="font-bold inline">Query Language:.</h4><p className="pl-4"> Uses SQL (Structured Query Language) to interact with the database..</p>
                     </p>

                     <p > <h4 className="font-bold inline">Use Case:</h4><p className="pl-4"> Suitable for applications that require structured, consistent, and well-organized data (e.g., financial systems, e-commerce platforms)..</p>
                     </p>
                     <div className="flex flex-col">
                        <h4 className="font-bold">Examples:</h4>
                        <ul className="pl-6">
                           <li className="list-decimal"> MySQL</li>
                           <li className="list-decimal"> PostgreSQL</li>
                           <li className="list-decimal"> Oracle Database</li>
                           <li className="list-decimal">  Microsoft SQL Server</li>
                        </ul>
                     </div>
                     <div className="flex flex-col">
                        <h4 className="font-bold">Key Features:</h4>
                        <ul className="pl-6">
                           <li className="list-decimal"> Enforces data integrity using constraints.</li>
                           <li className="list-decimal"> Best suited for transactional systems with ACID properties (Atomicity, Consistency, Isolation, Durability).</li>
                        </ul>
                     </div>



                     <h3 className="font-bold">Non-Relational DBMS (NoSQL):</h3>

                     <p > <h4 className="font-bold inline">Structure:</h4><p className="pl-4"> Data is stored in non-tabular formats such as documents, key-value pairs, graphs, or wide-column stores.</p>
                     </p>

                     <p > <h4 className="font-bold inline">Flexibility:</h4><p className="pl-4">Allows for schema-less or dynamic data, making it ideal for applications with rapidly changing data structures.</p>
                     </p>

                     <p > <h4 className="font-bold inline">Use Case:</h4><p className="pl-4">Suitable for big data, real-time analytics, and applications requiring horizontal scalability (e.g., social media, IoT, content management).</p>
                     </p>

                     <div className="flex flex-col">
                        <h4 className="font-bold">Examples:</h4>
                        <ul className="pl-6">
                           <li className="list-decimal">  MongoDB (Document-based)</li>
                           <li className="list-decimal">Cassandra (Wide-column store)</li>
                           <li className="list-decimal"> Redis (Key-value store)</li>
                           <li className="list-decimal"> Neo4j (Graph database)</li>
                        </ul>
                     </div>

                     <div className="flex flex-col">
                        <h4 className="font-bold">Key Features:</h4>
                        <ul className="pl-6">
                           <li className="list-decimal"> Optimized for scalability and performance.</li>
                           <li className="list-decimal"> Often sacrifices strict consistency for better availability (CAP theorem).</li>
                        </ul>
                     </div>

                     <div className="flex flex-col gap-4">
                        <h3>How to Choose?</h3>

                        <p> <h4 className="font-bold">RDBMS</h4><p className="pl-6"> is ideal for applications where data consistency and structured relationships are critical.
                        </p>
                        </p>
                        <p><h4 className="font-bold">NoSQL DBMS</h4><p className="pl-6">is better for handling large volumes of unstructured or semi-structured data, or when scalability and flexibility are top priorities.
                        </p>
                        </p>

                     </div>
                     <p>
                        Both types have their own advantages and are often used together in modern systems, depending on the use case. This combination is known as a <i>polyglot persistence</i> approach. So I recommand to learn both DBMS </p>
                  </p>
                  <p className="font-bold">Resource to Learn Database Management:</p>
                  <div className="flex flex-col gap-4">
                     <div className="flex flex-col">
                        <h3>For Relational Databases (SQL):</h3>
                        <ul className="flex flex-col gap-3">
                           <li className="flex gap-3 items-center">
                              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                              <a
                                 className="text-[#28ffd4] underline"
                                 href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">W3Schools SQL Tutorial</a>
                           </li>
                           <li className="flex gap-3 items-center">
                              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                              <a
                                 className="text-[#28ffd4] underline"
                                 href="https://www.geeksforgeeks.org/sql-tutorial/" target="_blank" rel="noopener noreferrer">SQL Tutorial - GeeksforGeeks</a>
                           </li>
                           <li className="flex gap-3 items-center">

                              <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                 play_arrow
                              </span>
                              <a href="https://youtu.be/hlGoQC332VM?si=4fYWlbION2VgkxKa" target="_blank" rel="noopener noreferrer">
                                 <span className="text-[#28ffd4] underline">SQL - Complete Course in 3 Hours | SQL One Shot using MySQL by APNA COLEGE</span>
                              </a>

                           </li>

                           <li className="flex gap-3 items-center">

                              <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                 play_arrow
                              </span>
                              <a href="https://youtu.be/HXV3zeQKqGY?si=fboFQ363xMq0agA1" target="_blank" rel="noopener noreferrer">
                                 <span className="text-[#28ffd4] underline">SQL Tutorial - Full Database Course for Beginners by freeCodeCamp.org
                                 </span>
                              </a>

                           </li>
                        </ul>
                     </div>
                     <div className="flex flex-col">
                        <h3>For NoSQL Databases (MongoDB)::</h3>
                        <ul className="flex flex-col gap-3">
                           <li className="flex gap-3 items-center">
                              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                              <a
                                 className="text-[#28ffd4] underline"
                                 href="https://learn.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB University – Free courses on MongoDB for beginners and advanced users</a>
                           </li>
                           <li className="flex gap-3 items-center">
                              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                              <a
                                 className="text-[#28ffd4] underline"
                                 href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">MongoDB Documentation – Comprehensive official docs.</a>
                           </li>
                           <li className="flex gap-3 items-center">

                              <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                 play_arrow
                              </span>
                              <a href="https://youtu.be/oMrKVEedpHg?si=D0DTI0GKJt1o98WE" target="_blank" rel="noopener noreferrer">
                                 <span className="text-[#28ffd4] underline">Installing MongoDB & MongoDB Compass | Sigma Web Development Course - Tutorial #94 by CodeWithHarry
                                 </span>
                              </a>

                           </li>

                           <li className="flex gap-3 items-center">

                              <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                 play_arrow
                              </span>
                              <a href="https://youtu.be/rU9ZODw5yvU?si=BzZPU4sBkWofOMRp" target="_blank" rel="noopener noreferrer">
                                 <span className="text-[#28ffd4] underline">MongoDB Complete Course Tutorial in Hindi🔥Free Notes & Projects by Thapa Technical
                                 </span>
                              </a>

                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex justify-between">
               <button onClick={closeDBMS} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
               <button onClick={nextHandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
            </div>
         </div>
      </section>
   );
}
