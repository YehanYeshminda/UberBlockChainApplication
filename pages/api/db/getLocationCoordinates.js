const getLocationCoordinates = async (req, res) => {
	const mapBoxUrl = `${process.env.MAPBOX_LOCATION_API_URL}/${req.body.location}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

	try {
		const responce = await fetch(mapBoxUrl);

		const data = await responce.json();

		res.status(200).send({ message: 'success', data: data.features[0].center });
	} catch (error) {
		res.status(500).send({ message: 'error', data: error.message });
	}
};

export default getLocationCoordinates;
