import AndersonImg from '../temp/AndersonImg.jpg';
import EmergenyHelpImg from '../temp/safetyImg.jpg';
import PhonecallImg from '../temp/phonecall.jpg';
import framersImg from '../temp/framers.jpg';
import reportIssue from '../temp/report.jpg';
import privacyImg from '../temp/privacy.jpg';

export const safetyDataLeft = [
	{
		id: 1,
		img: AndersonImg,
		header: 'All drivers are background checked before their first trip',
		decription:
			'We want you to move freely, make the most of your time, and be connected to the people and places that matter most to you.',
		decription2:
			'That’s why we’re committed to safety—from the creation of new standards to the development of technology with the aim of reducing incidents.',
		left: true,
	},
	{
		id: 2,
		img: EmergenyHelpImg,
		header: 'There’s emergency help if you need it',
		decription:
			'In an emergency, speed and accuracy are critical. If you call 911 from the Uber app, the app displays your live location and trip details, so you can share them with the emergency dispatcher. And in a growing number of US cities, this information is automatically provided to the authorities.',
		decription2: '',
		left: false,
	},
	{
		id: 3,
		img: PhonecallImg,
		header: 'We’ve built technology to look out for you',
		decription:
			'We hope every trip is a smooth one, but things dont always go as planned—which is why we built RideCheck. By using sensors and GPS data, RideCheck can help detect if a trip goes unusually off-course or if a possible crash has occurred. If the app alerts us to anything out of the ordinary, we’ll reach out to provide you with the resources you need to get help.',
		decription2: '',
		left: true,
	},
	{
		id: 4,
		img: framersImg,
		header: 'There’s auto insurance to help protect you',
		decription:
			'Leading auto insurance providers help protect riders and drivers on the Uber app. Uber maintains commercial auto insurance in case of a covered accident, including at least $1 million in liability insurance on behalf of drivers and delivery people once a ride is accepted.',
		decription2: '',
		left: false,
	},
	{
		id: 5,
		img: reportIssue,
		header: 'You have our support, whenever you need it',
		decription:
			'Uber support is available 24 hours a day, 7 days a week, and is handled by a team of trained safety agents. If you’re in immediate danger, you should always contact authorities first.',
		decription2: '',
		left: true,
	},
	{
		id: 6,
		img: privacyImg,
		header: 'Your personal details stay private',
		decription:
			'We use technology to help keep your phone number private, so neither drivers nor riders will see each other’s numbers when communicating through the Uber app. Once a trip is completed, the app also protects rider information by concealing specific pickup and dropoff addresses in a driver’s trip history.',
		decription2: '',
		left: false,
	},
];
