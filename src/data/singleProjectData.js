// Import images
import onchainInvesting1 from '../images/projects/onchain-investing/onchain-investing-1.jpg'
import onchainInvesting2 from '../images/projects/onchain-investing/onchain-investing-2.jpg'
import onchainInvesting3 from '../images/projects/onchain-investing/onchain-investing-3.jpg'

import charitychain from '../images/projects/charitychain/main.png'
import charitychain1 from '../images/projects/charitychain/home.png'
import charitychain2 from '../images/projects/charitychain/add-charity.png'
import charitychain3 from '../images/projects/charitychain/charity-dashboard.png'
import charitychain4 from '../images/projects/charitychain/donate.png'
import charitychain5 from '../images/projects/charitychain/donations-list.png'
import charitychain6 from '../images/projects/charitychain/signup.png'

import campsitebooker from '../images/projects/campsite-booker/main.png'
import campsitebooker1 from '../images/projects/campsite-booker/home.png'
import campsitebooker2 from '../images/projects/campsite-booker/payment.png'
import campsitebooker3 from '../images/projects/campsite-booker/resource.png'

import countrydetail from '../images/projects/country-detail/main.png'
import countrydetail1 from '../images/projects/country-detail/detail.png'
import countrydetail3 from '../images/projects/country-detail/all.png'
import countrydetail4 from '../images/projects/country-detail/favorite.png'

import rentic from '../images/projects/rentic/rentic.png'
import rentic1 from '../images/projects/rentic/rentic1.png'
import rentic2 from '../images/projects/rentic/rentic2.png'
import rentic3 from '../images/projects/rentic/rentic3.png'

import chatbrewery from '../images/projects/chatbrewery/chatbrewery.png'
import chatbrewery1 from '../images/projects/chatbrewery/chatbrewery1.png'
import chatbrewery2 from '../images/projects/chatbrewery/chatbrewery2.png'
import chatbrewery3 from '../images/projects/chatbrewery/chatbrewery3.png'
import chatbrewery4 from '../images/projects/chatbrewery/chatbrewery4.png'
import chatbrewery5 from '../images/projects/chatbrewery/chatbrewery5.png'
import chatbrewery6 from '../images/projects/chatbrewery/chatbrewery6.png'

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
	{	
		id: 1,
		ProjectHeader: {
			title: 'Onchain Investment',
			publishDate: 'Jul 26, 2024',
			tags: 'Android / Mobile / UI / Frontend',
		},
		ProjectImages: [{ img: onchainInvesting1 }, { img: onchainInvesting2 }, { img: onchainInvesting3 }],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: 
			[
				{ title: 'Block Magic', details: 'A Chainlink Hackathon' },
				{ title: 'Services', details: 'Android Application Development' },
				{ title: 'Website', details: 'https://chainlinkblockmagic.devpost.com' },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Introduce a blockchain-powered platform that offers fractional ownership of tokenized assets, making diversified portfolios accessible to small investors. By leveraging blockchain technology, the platform aims to lower trading and management costs, removing barriers that have historically excluded smaller investors from financial markets.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [ 'Java', 'Android', 'Android Studio', 'Firebase Firestore' ],
				},
			],
			ProjectDetailsHeading: 'Project Overview',
			ProjectDetails: [
				{ details: `Software repository for supporting a blockchain-powered platform enabling fractional ownership of tokenized real-world assets as well as Blockchain-native assets. In the past, the TradFi industry's best efforts at creating affordable, well-diversified portfolios for small investors resulted in the creation of pooled investments in the form of Mutual Funds in the early days followed by Exchange Traded Funds that proved to be much cheaper and more effective as an investment product. Mutual Funds and Exchange Traded Funds do not provide investors with a full drill-down view into the underlying assets that these pooled investments hold. In addition, there's a long history of value capture by the financial institutions providing these pooled investment vehicles, which is not passed down to the end investors. High net worth individuals have always had solutions and services that were a lot less costly, on a relative basis, than the services available to smaller investors.` },
				{ details: `Attempts to provide small investors with solutions, similar to high net worth investors, involving well-diversified portfolios made up of individual assets have only had limited success on account of the higher relative trading and administration costs of those solutions when servicing clients with smaller asset sizes. There is a relatively high floor, from a cost perspective, of running the traditional Investment Management, Trading, Settlement and Custody systems required to service retail investors. The high cost of the traditional Investment Management systems and related IT Infrastructures have resulted in a Value Curve that has prevented the smallest investors from accessing the type of investment services that have been available to higher net worth individuals.` },
				{ details: `By using Blockchain technology, we are aiming to reduce trading costs and investment management administration costs to near-zero in order to enable anyone to invest in the same type of well-diversified portfolios as high net worth clients, regardless of how much they have to start investing with. We believe that with Blockchain and DeFi technologies we can radically shift the Value Curve, eliminating the remaining cost barriers for small investors so they can also start investing towards financial freedom.` },
				{ details: `Our goal is to provide everyone with the opportunity to invest in highly diversified portfolios, starting with even the smallest investors. We're targeting a vastly underserved market, comprising millions of people who've been excluded from investing due to various barriers to entry. These are individuals who are ready to invest monthly modest recurring amounts, such as $100 or even $10, amounts that may be small by developed-country standards but represent significant sums to them. They have often been overlooked by financial service providers that are forced to target larger investors, driven by the high costs of legacy IT infrastructures.` },
				{ details: `Our mission is to democratize investing, starting with small investors who've been excluded due to barriers related to the high operating costs of traditional investment management systems and services. We're initially focusing on tokenized traditional stocks and bonds, while our infrastructure is designed to support both tokenized real-world assets and Blockchain-native assets.` },
				{ details: `With years of experience in the Traditional Finance industry, we recognize that the type of Investment Management platform we are envisioning will require regulatory approvals to legally operate in the capital market jurisdictions we aim to serve. We put a lot of thought into the type of approach that will provide the smoothest path to regulatory approval, and we believe we found the right approach.` },
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/' },
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{ id: 5, title: 'Rentic', img: rentic },
				{ id: 6, title: 'ChatBrewery', img: chatbrewery },
			],
		},
	},
	{	
		id: 2,
		ProjectHeader: {
			title: 'CharityChain',
			publishDate: 'Jul 26, 2023',
			tags: 'UI / Frontend',
		},
		ProjectImages: [{ img: charitychain1 }, { img: charitychain2 }, { img: charitychain3 }, { img: charitychain4 }, { img: charitychain5 }, { img: charitychain6 }],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: 
			[
				{ title: 'Name', details: 'Powell' },
				{ title: 'Services', details: 'Blockchain Web Development' },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Develop a secure blockchain-based donation platform that allows users and charities to log in, facilitating direct donations using cryptocurrency. The system ensures transparency, security, and traceability for all transactions, providing a trusted environment for charitable contributions.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [ 'Javascript', 'CSS', 'HTML', 'Firebase Firestore' ],
				},
			],
			ProjectDetailsHeading: 'Project Overview',
			ProjectDetails: [
				{ details: `This project is a blockchain-based donation platform designed to provide users and charities with a secure, transparent, and efficient way to engage in charitable contributions. By leveraging blockchain technology, the platform ensures that donations made in cryptocurrency are traceable, secure, and decentralized, enhancing trust and transparency for both donors and charities.` },
				{ details: `Key Features` },
				{ details: `1. Home Page: The home page serves as the main entry point for users, offering an overview of the platform's mission and purpose. Visitors can learn about the benefits of using blockchain for donations, explore featured charities, and understand how the platform works.` },
				{ details: `2. Donation Page: The donation page allows users to easily donate using various cryptocurrencies. Users can browse a list of verified charities added to the platform, view detailed profiles of each charity, and contribute directly to the causes they care about. All donations are securely processed through the blockchain, ensuring transparency and trust.` },
				{ details: `3. Charity List: Users can access a dedicated page that displays all the registered charities on the platform. Each charity has its own profile, which includes its mission, goals, and a description of its cause. This page allows users to make informed decisions when selecting which charities to support.` },
				{ details: `4. Login and Signup Page: Both users and charities can either log in or sign up through this page. The platform offers two types of accounts:\n    • User Account: Allows individuals to donate to different charities, view their donation history, and explore new causes.\n    • Charity Account: Allows charities to manage their profiles, set donation goals, and view detailed analytics on how many people have donated to their cause.` },
				{ details: `5. Charity Dashboard: Once logged in, charities gain access to a dashboard where they can monitor their donations. Charities can: \n	• See how many people have donated to their cause.\n	• Set a donation goal to track fundraising progress.\n	• Update their profile with a detailed description of their mission and cause.` },
				{ details: `6. User Experience: After signing in, users can:\n	• Browse the list of registered charities and explore their profiles.\n	• Make cryptocurrency donations to the charities they wish to support.\n	• Track their donation history, ensuring full transparency over their contributions.` },
				{ details: `Blockchain Integration\nThe platform uses blockchain technology to handle all transactions, providing:\n	• Security: Every transaction is encrypted and verified on the blockchain, making it highly secure.\n	• Transparency: Users can track their donations, ensuring that funds are reaching the intended charity without any middlemen.\n	• Trust: The decentralized nature of blockchain reduces the potential for fraud, creating a transparent and trustworthy environment for donations.` },
				{ details: `Conclusion\nThis project aims to revolutionize the way donations are made by providing a blockchain-based solution that benefits both users and charities. By enhancing security and transparency, it empowers users to contribute with confidence and helps charities reach their fundraising goals more effectively.` },
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/' },
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{ id: 3, title: 'Campsite Booker', img: campsitebooker },
			],
		},
	},
	{	
		id: 3,
		ProjectHeader: {
			title: 'Campsite Booker',
			publishDate: 'Jul 14, 2022',
			tags: 'UI / Frontend',
		},
		ProjectImages: [{ img: campsitebooker1 }, { img: campsitebooker2 }, { img: campsitebooker3 }],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: 
			[
				{ title: 'Name', details: 'College Assignment' },
				{ title: 'Services', details: 'Web Development' },
				{ title: 'Website', details: 'github.com/GodLikeGill/CampsiteBooker'}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'This website allows users to filter and reserve campsites based on available equipment and stay duration. It features a simple navigation system, detailed campsite listings, and an easy reservation process with a confirmation receipt.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [ 'Javascript', 'CSS', 'HTML' ],
				},
			],
			ProjectDetailsHeading: 'Project Overview',
			ProjectDetails: [
				{ details: `This website is designed to simplify the process of reserving campsites, providing users with an easy-to-use platform where they can browse, filter, and book campsite locations based on their preferences. The interface is organized into three key sections accessible through navigation links: Reserve a Site, Resources, and Deals.` },
				{ details: `1. Homepage (Filter by Equipment and Nights Available):` },
				{ details: `The homepage allows users to narrow down their campsite options based on the availability of specific equipment (such as tents, RV hookups, or cabins) and the number of nights they wish to stay. This filtering ensures that users only see campsites that meet their specific needs, streamlining the selection process.` },
				{ details: `2. Campsite Listing (Filtered Search Results):` },
				{ details: `After filtering on the homepage, users are directed to a second page that displays a comprehensive list of campsites that match their criteria. Each campsite is presented with detailed information, including:\n• Campsite Name\n• Availability (dates and times)\n• Site type and features (e.g., tent spots, parking, amenities) This allows users to make an informed decision when selecting a campsite.` },
				{ details: `3. Reservation Page (User Input and Booking Confirmation):` },
				{ details: `Once a campsite is selected, users proceed to the reservation page. Here, they are prompted to enter personal details such as:\n• Name\n• Email\n• Number of nights they wish to reserve\nAfter entering this information and confirming their reservation, the system generates a receipt, confirming the reservation details and ensuring users have all the necessary information about their booking.` },
				{ details: `Key Features:` },
				{ details: `• Filtering System: Allows users to refine their campsite search by equipment availability and desired stay duration.\n• Detailed Listings: Provides comprehensive details about each campsite, ensuring users can make informed choices.\n• Simple Reservation Process: Streamlined form for users to quickly reserve a site and receive a confirmation receipt.` },
				{ details: `This project aims to offer a seamless and user-friendly way for outdoor enthusiasts to find and reserve campsites that match their preferences, making planning their trips more efficient and enjoyable.` },
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/' },
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{ id: 2, title: 'CharityChain', img: charitychain },
			],
		},
	},
	{	
		id: 4,
		ProjectHeader: {
			title: 'Country Detail',
			publishDate: 'Oct 24, 2022',
			tags: 'iOS / Mobile / UI / Frontend',
		},
		ProjectImages: [{ img: countrydetail1 }, { img: countrydetail3 }, { img: countrydetail4 }],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: 
			[
				{ title: 'Name', details: 'College Assignment' },
				{ title: 'Services', details: 'iOS Development' },
				{ title: 'Website', details: 'github.com/GodLikeGill/CountryDetail'}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'This iOS app allows users to view, favorite, and explore detailed information about countries worldwide with a clean, user-friendly interface and map integration for capital cities.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [ 'Swift', 'Xcode', 'API' ],
				},
			],
			ProjectDetailsHeading: 'Project Overview',
			ProjectDetails: [
				{ details: `This iOS application serves as a comprehensive tool for retrieving and displaying detailed information about all countries in the world. The app is designed with a clean, intuitive user interface, making it simple for users to explore global data and manage their favorite countries efficiently.` },
				{ details: `Key Features:` },
				{ details: `1. Country List Display:\nThe app presents a full list of countries, allowing users to easily browse through all available nations. Each country is displayed in a clean, organized format, ensuring a smooth user experience.` },
				{ details: `2. Favoriting System:\nUsers can add countries to their Favorites list, enabling quick access to their preferred countries. Countries marked as favorites are visually distinct, with a different color to indicate their status.` },
				{ details: `3. Sorting by Favorites:\nThe app includes a feature that allows users to sort the list by their favorite countries, making it easier to locate and manage them. This enhances user navigation and personalization of the app.` },
				{ details: `4. Country Details Page:\nUpon selecting a country, users are directed to a Country Details section, where they can view in-depth information about the country. This section includes:\n• General information about the country.\n• A map that highlights the country with a pin on the capital city, adding visual context to the data.` },
				{ details: `5. API Integration:\nThe app utilizes an API to retrieve up-to-date information on all countries. This ensures that users have access to the latest data, making the app both informative and dynamic.` },
				{ details: `Technical Approach:\nThis project showcases the use of API integration in an iOS application, demonstrating how data can be retrieved from external sources and displayed in a structured, user-friendly format. The app leverages iOS frameworks for UI design, navigation, and data handling, ensuring a smooth and efficient experience.` },
				{ details: `Summary:\nWith its ability to display all countries, manage favorite lists, and provide detailed information with map visuals, this app offers users an easy-to-use platform for exploring global data. Its focus on simplicity and functionality makes it a great example of API utilization in iOS development.` },
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/' },
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{ id: 1, title: 'Onchain Investing', img: onchainInvesting1 },
				{ id: 2, title: 'CharityChain', img: charitychain },
				{ id: 3, title: 'Campsite Booker', img: campsitebooker },
				{ id: 4, title: 'Country Detail', img: countrydetail },
			],
		},
	},
	{	
		id: 5,
		ProjectHeader: {
			title: 'Rentic',
			publishDate: 'Oct 24, 2022',
			tags: 'Android / Mobile / UI / Frontend',
		},
		ProjectImages: [{ img: rentic1 }, { img: rentic2 }, { img: rentic3 }],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: 
			[
				{ title: 'Name', details: 'College Project' },
				{ title: 'Services', details: 'Android Application Development' },
				{ title: 'Website', details: 'github.com/GodLikeGill/Rentic'}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Rentic is an Android app that allows users to rent items or post their own for rent, with features like user authentication, chat, and geolocation.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [ 'Java', 'Android Studio', 'Firebase Firestore' ],
				},
			],
			ProjectDetailsHeading: 'Project Overview',
			ProjectDetails: [
				{ details: `Rentic is an Android application that provides a platform where users can either rent products from others or list their own items for rent. The app focuses on simplicity and functionality, featuring a clean and intuitive user interface that makes it easy for users to navigate, create rental ads, and connect with others in the community.` },
				{ details: `Key Features:` },
				{ details: `1. User Authentication & Database:\n• Users can sign up and log in to the app using Firebase Authentication. This ensures secure access to the platform and enables personalized user experiences.\n• Firebase Database is used to store user information, rental listings, and transaction history, providing a seamless way to manage data across the platform.` },
				{ details: `2. Creating Rental Ads:\n• Users can list items they want to rent out by creating Rent Ads within the app. The process is simple and involves uploading product details such as descriptions, images, and rental prices, making it easy for others to browse and rent the item.` },
				{ details: `3. Renting Products:\n• Users can browse and select products they wish to rent. The app includes a search and filter functionality, allowing users to easily find the items they need. Once an item is selected, users can initiate the rental process directly through the app.` },
				{ details: `4. Chat Feature:\n• The in-app chat system allows users to communicate directly with each other. This feature is essential for negotiating rental terms, arranging delivery or pickup, and ensuring smooth interactions between the renter and the item owner.` },
				{ details: `5. Geolocation Integration:\n• The app utilizes Geocoding to help users identify the location of available items for rent. This feature allows users to find nearby rentals and facilitates easier delivery and pickup logistics.` },
				{ details: `Tools & Technologies Used:\n• Firebase Database: To store user profiles, rental listings, and chat data.\n• Firebase Authentication: For secure user sign-up, login, and account management.\n• Geocoding: For integrating location-based services to help users find local rental items.\n• Android Studio: The primary development environment for building and testing the application.\n• Android version 5.1 or later: Ensuring compatibility with a wide range of devices.` },
				{ details: `Summary:\nRentic offers a user-friendly platform that simplifies the process of renting items or listing products for rent. With key features like secure user authentication, easy-to-create ads, a chat system, and geolocation services, this app is a comprehensive solution for anyone looking to rent or lend products. Built using modern tools such as Firebase and Android Studio, "Rentic" is optimized for Android devices running version 5.1 or later, making it accessible to a broad audience.` },
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/' },
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{ id: 1, title: 'Onchain Investing', img: onchainInvesting1 },
				{ id: 6, title: 'ChatBrewery', img: chatbrewery },
			],
		},
	},
	{	
		id: 6,
		ProjectHeader: {
			title: 'ChatBrewery',
			publishDate: 'Aug 8, 2023',
			tags: 'Android / Mobile / UI / Frontend',
		},
		ProjectImages: [{ img: chatbrewery1 }, { img: chatbrewery2 }, { img: chatbrewery3 }, { img: chatbrewery4 }, { img: chatbrewery5 }, { img: chatbrewery6 },],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: 
			[
				{ title: 'Name', details: 'Internship Project' },
				{ title: 'Services', details: 'Android Application Development' },
				{ title: 'Website', details: 'github.com/GodLikeGill/ChatBrewery'}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'ChatBrewery is an Android application designed for users to conveniently send messages, manage profiles, and interact with friends through friend requests and real-time chat functionality, using Firebase for authentication and data management.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [ 'Java', 'Android Studio', 'Firebase Firestore' ],
				},
			],
			ProjectDetailsHeading: 'Project Overview',
			ProjectDetails: [
				{ details: `Chat Brewery is a user-friendly Android-based chatting application that enables users to interact and communicate with their friends in real time. The app is designed to provide a smooth chatting experience, offering essential features like sending messages, managing profiles, and making connections through friend requests. The core focus of "Chat Brewery" is to create a streamlined, easy-to-use platform where users can quickly connect with others, making it an excellent tool for personal communication.` },
				{ details: `Core Features:` },
				{ details: `1. User Authentication & Database Management:\n• The app utilizes Firebase Authentication for user login and sign-up functionalities, ensuring secure access to the platform.\n• Firebase Database is used to manage all user data, including profiles, friends, and messages. This cloud-based solution allows for real-time data synchronization, ensuring quick and reliable access to chat functionalities.` },
				{ details: `2. User Profiles (Editable):\n• Users can create and edit their profiles with basic information like their name, profile picture, and bio. This feature ensures that users can maintain an updated online presence, visible to friends within the app.` },
				{ details: `3. Login/Sign-up System:\n• Users can easily create new accounts or log in to existing ones via Firebase Authentication, which supports email/password combinations or other authentication methods like Google sign-in.` },
				{ details: `4. Friend Management (Send/Receive Friend Requests):\n• The app enables users to search for friends within the platform and send friend requests. Once a request is accepted, users can begin chatting with each other. Friend management is an essential aspect of the app, as it forms the basis for communication.` },
				{ details: `5. Messaging System (Send/Receive Messages):\n• Once connected, users can send and receive real-time messages with their friends. This functionality is made possible by Firebase's real-time database, ensuring messages are delivered instantly and reliably.` },
				{ details: `Tools & Technologies Used:` },
				{ details: `1. Firebase Database:\n• A cloud-based NoSQL database that stores user profiles, messages, and friendships. Its real-time syncing capabilities ensure that all data is instantly available to users across various devices.` },
				{ details: `2. Firebase Authentication:\n• Manages secure user login, sign-up, and session management processes. Firebase Authentication supports multiple authentication methods like email/password and third-party logins, providing flexibility and security.` },
				{ details: `3. Android Studio:\n• The official Integrated Development Environment (IDE) for Android development, providing a robust environment to build, test, and deploy the app.` },
				{ details: `4. Android SDK:\n• The app is designed for devices running Android version 5.1 or later, ensuring compatibility with a wide range of Android devices.` },
				{ details: `Key Use Cases:` },
				{ details: `1. User Registration & Profile Setup:\n• Users can quickly sign up for the platform, set up their profiles, and begin making connections.` },
				{ details: `2. Friend Requests:\n• Users can send and receive friend requests to initiate communication with other app users.` },
				{ details: `3. Real-Time Chatting:\n• Once connected as friends, users can engage in seamless, real-time conversations, sending and receiving messages instantly. ` },
				{ details: `Conclusion:\nChat Brewery leverages the power of Firebase and Android development tools to offer a seamless chatting experience. By focusing on essential communication features like real-time messaging, editable profiles, and secure authentication, the app provides users with a modern and efficient way to stay connected with their friends.` },
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/' },
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{ id: 1, title: 'Onchain Investing', img: onchainInvesting1 },
				{ id: 5, title: 'Rentic', img: rentic },
			],
		},
	},
];
