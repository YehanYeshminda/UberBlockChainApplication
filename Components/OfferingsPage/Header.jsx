const Header = () => {
	return (
		<div className="sm:mb-16 md:mb-20 md:h-[60vh]" data-testid="headerTest-1">
			<div>
				<div className="sm:pt-32 sm:text-3xl sm:text-center md:text-left md:pt-60 sm:font-medium  md:text-6xl md:font-medium">
					Uber’s technology offerings
				</div>
				<div className="sm:mt-5 sm:text-center md:text-left md:mt-7 md:tracking-wide md:text-1xl">
					Changing how people can request rides and get from point A to point B
					is just the beginning.
				</div>
			</div>
		</div>
	);
};

export default Header;
