import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import styles from '../styles/Settings.module.scss';

export default function settings() {
    return (
        <>
        <SiteHeader />
        <section>
            <div className="bg-gray-100 py-2 pb-6 px-6">

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
                    <div className={`${styles.formWrap} bg-white p-4 md:px-10`}>
                        <div className="text-center mb-8">
                            <figure>
                                <img src="/images/dummy.svg" alt=""/>
                                <figcaption>
                                    <div className={styles.icon}>
                                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.015 4.526h-3.32L22.862 1.79C22.17.763 20.959.147 19.714.147h-7.609C10.86.147 9.65.763 8.958 1.79L7.125 4.526h-3.32C1.695 4.526 0 6.202 0 8.29v13.273c0 2.086 1.695 3.763 3.804 3.763h24.21c2.11 0 3.805-1.677 3.805-3.763V8.289c0-2.087-1.694-3.763-3.804-3.763zM15.91 22.246c-4.739 0-8.578-3.797-8.578-8.484 0-4.686 3.84-8.45 8.578-8.45 4.738 0 8.577 3.798 8.577 8.485 0 4.652-3.839 8.449-8.577 8.449zM27.53 9.828H26.01c-.623-.034-1.107-.547-1.072-1.163a1.12 1.12 0 011.072-1.06h1.383a1.118 1.118 0 011.176 1.06 1.087 1.087 0 01-1.037 1.163z" fill="#fff"/><path d="M15.91 9.076c-2.629 0-4.773 2.121-4.773 4.72 0 2.6 2.144 4.687 4.773 4.687 2.628 0 4.773-2.12 4.773-4.72 0-2.6-2.145-4.687-4.773-4.687z" fill="#fff"/></svg>
                                        Change Photo
                                    </div>
                                </figcaption>
                            </figure>
                            <div>
                                <a href="" className={`${styles.delete}`}>Delete Photo</a>
                            </div>
                        </div>
                        <form action="" className="flex flex-wrap">
                            <div className="w-full mb-4">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="">Bio</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="w-1/2 mb-4 pr-2">
                                <label htmlFor="">Twitter Link</label>
                                <input type="text" placeholder="Enter URL" />
                            </div>
                            <div className="w-1/2 mb-4 pl-2">
                                <label htmlFor="">Linkedin Link</label>
                                <input type="text" placeholder="Enter URL" />
                            </div>
                            <div className="w-1/2 mb-4 pr-2">
                                <label htmlFor="">Website</label>
                                <input type="text" placeholder="Enter URL" />
                            </div>
                            <div className="w-1/2 mb-4 pl-2">
                                <label htmlFor="">Github</label>
                                <input type="text" placeholder="Enter URL" />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="">Website</label>
                                <input type="text" placeholder="Enter Website" />
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
