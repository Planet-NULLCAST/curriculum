import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import styles from '../styles/Settings.module.scss';

export default function settings() {
    return (
        <>
        <SiteHeader />
        <section>
            <div className={`${styles.settingsBg} bg-gray-100 py-2 pb-6 px-6`}>

                <div className="bg-white h-12 my-3 flex flex-row items-center rounded shadow-sm max-w-panel">
                    <ul className="flex flex-row justify-start items-center font-semibold h-full">
                        <li className="mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center border-gray-600">
                            <span className="mt-1 text-gray-600">Settings</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-wrap relative lg:justify-center">
                    <div className={`${styles.aside} bg-white md:mr-4`}>
                        <ul>
                            <li><span>Edit Profile</span></li>
                            <li><span>Change Password</span></li>
                            <li><span>Notifications</span></li>
                            <li><span>Seassoins</span></li>
                        </ul>
                    </div>
                    <div className={`${styles.formWrap} bg-white p-4 py-7 md:px-10`}>
                        <form action="" className="flex flex-wrap">
                            <div className="w-full mb-4">
                                <label htmlFor="">Current Password</label>
                                <input type="text" placeholder="Enter Current Password" />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="">New Password</label>
                                <input type="text" placeholder="Enter New Password" />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="">Confirm Password</label>
                                <input type="text" placeholder="Confirm Password" />
                            </div>
                            <div className="text-right w-full">
                                <button>Update Profile</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}
