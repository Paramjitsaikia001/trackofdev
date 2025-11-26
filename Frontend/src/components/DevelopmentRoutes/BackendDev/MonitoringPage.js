import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MonitoringPage({ closeMonitor, Done }) {
    const Nexthandler = () => {
        Done();
        closeMonitor();
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
                        onClick={closeMonitor}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Monitoring & Logging in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Monitoring</span> helps track the 
                        health, performance, and uptime of backend systems,  
                        while <span className="text-[#23daff] font-bold">Logging</span> records 
                        events and errors for debugging, auditing, and analysis.
                    </p>

                    <p>
                        Together, they ensure backend applications are **reliable, observable, and maintainable** 
                        in production environments.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Importance of monitoring and observability</li>
                            <li>Centralized logging systems</li>
                            <li>Metrics (CPU, memory, response time, error rate)</li>
                            <li>Distributed tracing (Jaeger, OpenTelemetry)</li>
                            <li>Log levels (info, warn, error, debug)</li>
                            <li>Alerting & notifications (Slack, email, PagerDuty)</li>
                            <li>Dashboards & visualization</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Libraries:</p>
                        <ul className="list-disc list-inside">
                            <li>Winston / Morgan (Node.js logging)</li>
                            <li>Elastic Stack (ELK: Elasticsearch, Logstash, Kibana)</li>
                            <li>Prometheus + Grafana (metrics & dashboards)</li>
                            <li>Datadog, New Relic (APM & monitoring)</li>
                            <li>Sentry (error tracking & monitoring)</li>
                            <li>OpenTelemetry (tracing & metrics collection)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Monitoring & Logging:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://opentelemetry.io/docs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        OpenTelemetry Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://grafana.com/docs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Grafana Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/hqc84FTRpoc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Logging in Node.js – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/Tf5Gb7Zy_NY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Monitoring with Prometheus & Grafana – TechWorld with Nana
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeMonitor}
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