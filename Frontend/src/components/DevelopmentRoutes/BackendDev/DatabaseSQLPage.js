import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function SQLPage({ closeSQL, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeSQL();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span 
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" 
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeSQL} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Database (SQL)</h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">SQL (Structured Query Language)</span> is the 
                        standard language for managing and querying relational databases. 
                        It is essential for backend developers, data engineers, and anyone 
                        working with structured data.
                    </p>

                    <p>
                        Mastering SQL helps you store, retrieve, and manipulate data efficiently 
                        across applications.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Basic Queries (SELECT, WHERE, ORDER BY, LIMIT)</li>
                            <li>Filtering and Sorting</li>
                            <li>Aggregations (COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING)</li>
                            <li>Joins (INNER, LEFT, RIGHT, FULL)</li>
                            <li>Subqueries & Nested Queries</li>
                            <li>Data Definition (CREATE, ALTER, DROP)</li>
                            <li>Data Manipulation (INSERT, UPDATE, DELETE)</li>
                            <li>Indexes & Optimization</li>
                            <li>Transactions and ACID Properties</li>
                            <li>Stored Procedures and Triggers</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>MySQL / PostgreSQL / SQL Server</li>
                            <li>SQLite (lightweight DB)</li>
                            <li>PgAdmin / MySQL Workbench</li>
                            <li>Cloud Databases (AWS RDS, Google Cloud SQL, Azure SQL)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn SQL:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">MySQL Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">PostgreSQL Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/HXV3zeQKqGY" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">SQL Tutorial – freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.udemy.com/course/the-complete-sql-bootcamp/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">The Complete SQL Bootcamp – Udemy</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button onClick={closeSQL} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}