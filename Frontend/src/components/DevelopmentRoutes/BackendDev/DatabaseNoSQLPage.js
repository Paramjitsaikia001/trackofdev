import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NoSQLPage({ closeNoSQL, Done }) {
    const Nexthandler = () => {
        Done();
        closeNoSQL();
    };

    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closeNoSQL} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Database (NoSQL)</h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">NoSQL databases</span> are non-relational 
                        databases designed for scalability, flexibility, and handling large volumes of 
                        unstructured or semi-structured data.  
                        Unlike SQL, NoSQL databases do not rely on strict table schemas.
                    </p>

                    <p>
                        Popular NoSQL databases include MongoDB, Firebase Firestore, Cassandra, and DynamoDB.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Introduction to NoSQL vs SQL</li>
                            <li>Types of NoSQL Databases (Document, Key-Value, Column, Graph)</li>
                            <li>MongoDB Basics (CRUD operations, schema design, indexes)</li>
                            <li>Firebase Firestore (real-time database concepts)</li>
                            <li>Scaling and Replication in NoSQL</li>
                            <li>Sharding and High Availability</li>
                            <li>Data Modeling for NoSQL</li>
                            <li>When to use NoSQL vs SQL</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>MongoDB & MongoDB Atlas</li>
                            <li>Firebase Firestore</li>
                            <li>Amazon DynamoDB</li>
                            <li>Redis (Key-Value store)</li>
                            <li>Cassandra (Wide-column store)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn NoSQL:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">MongoDB Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Firebase Firestore Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/-56x56UppqQ" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">MongoDB Crash Course – freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/9zUHg7xjIqQ" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Firebase Firestore Crash Course</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button onClick={closeNoSQL} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}