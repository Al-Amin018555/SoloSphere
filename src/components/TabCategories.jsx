import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <div className='text-center my-4 space-y-4'>
                    <h2 className='text-5xl font-bold'>Browse Jobs By Categories</h2>
                    <p>Three categores available for the time being. They are Web Development, Graphics Design <br /> and Digital Marketing. Browse them by clicking on the tabs below.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Web</Tab>
                        <Tab>Graphics</Tab>
                        <Tab>Digital</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <JobCard></JobCard>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </div>
        </Tabs>

    );
};

export default TabCategories;