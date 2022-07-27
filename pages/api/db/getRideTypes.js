import { client } from '../../../lib/sanity';

// database query to get the rides which were requested from the fields which are set up such as service, iconurl , pricemultiplier and the ID
const query = `
*[_type=="rides"]{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
}|order(orderById asc)`;

const getRideTypes = async (req, res) => {
	try {
		const sanityResponse = await client.fetch(query);

		res.status(200).send({ message: 'success', data: sanityResponse });
	} catch (error) {
		res.status(500).send({ message: 'error', data: error.message });
	}
};

export default getRideTypes;
