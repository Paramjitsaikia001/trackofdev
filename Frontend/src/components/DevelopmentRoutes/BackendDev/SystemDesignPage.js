import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function SystemDesignPage({ closeSystemDesign, Done }) {
    const Nexthandler = () => {
        Done();
        closeSystemDesign();
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
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span
                        onClick={closeSystemDesign}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    System Design & Architecture in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">System Design & Architecture</span> is about designing 
                        scalable, reliable, and efficient backend systems.  
                        It helps backend developers think beyond code — focusing on **performance, scalability, 
                        availability, and fault tolerance**.
                    </p>

                    <p>
                        These concepts are key when working on **large-scale applications, microservices, and distributed systems**.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Core Topics to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>System design fundamentals (scalability, reliability, availability)</li>
                            <li>Monolith vs Microservices vs Serverless architectures</li>
                            <li>Load balancing & reverse proxies</li>
                            <li>Database design (SQL vs NoSQL, sharding, replication, partitioning)</li>
                            <li>Caching strategies (Redis, Memcached, CDN)</li>
                            <li>Message queues & event-driven systems (RabbitMQ, Kafka, SQS)</li>
                            <li>CAP Theorem, Consistency models, Eventual Consistency</li>
                            <li>API Design (REST, GraphQL, gRPC)</li>
                            <li>Fault tolerance & high availability (failover, retries, circuit breakers)</li>
                            <li>Distributed system challenges (latency, consensus, idempotency)</li>
                            <li>Designing for scale (horizontal vs vertical scaling, autoscaling)</li>
                        </ul>

                        <p className="font-bold">Common Patterns & Techniques:</p>
                        <ul className="list-disc list-inside">
                            <li>Microservices Architecture</li>
                            <li>Event Sourcing & CQRS</li>
                            <li>Database sharding & replication</li>
                            <li>API Gateway patterns</li>
                            <li>Service Discovery (Consul, Eureka, etcd)</li>
                            <li>Designing idempotent APIs</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Technologies:</p>
                        <ul className="list-disc list-inside">
                            <li>NGINX, HAProxy (Load balancing)</li>
                            <li>Redis, Memcached (Caching)</li>
                            <li>Kafka, RabbitMQ, Amazon SQS (Messaging)</li>
                            <li>Consul, Zookeeper, etcd (Service discovery)</li>
                            <li>PostgreSQL, MongoDB, DynamoDB (Databases)</li>
                            <li>Kubernetes + Docker (Microservices orchestration)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn System Design & Architecture:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://github.com/donnemartin/system-design-primer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        System Design Primer (GitHub)
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/bUHFg8CZFws"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        System Design Basics – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/UzLMhqg3_Wc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        System Design Interview Prep – Gaurav Sen
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeSystemDesign}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Close
                    </button>
                    <button
                        onClick={Nexthandler}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Done
                    </button>
                </div>
            </div>
        </section>
    );
}