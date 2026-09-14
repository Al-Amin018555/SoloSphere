import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
            setJobs(data)
        }
        getData();
    }, [])
    console.log(jobs);
    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <div className='text-center my-4 space-y-4'>
                    <h2 className='text-5xl font-bold'>Browse Jobs By Categories</h2>
                    <p>Three categores available for the time being. They are Web Development, Graphics Design <br /> and Digital Marketing. Browse them by clicking on the tabs below.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid gap-6 my-6 gird-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            jobs.filter(j => j.category === 'Web Development')
                                .map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid gap-6 my-6 gird-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            jobs.filter(j => j.category === 'Graphics Design')
                                .map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid gap-6 my-6 gird-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            jobs.filter(j => j.category === 'Digital Marketing')
                                .map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>

    );
};

export default TabCategories;