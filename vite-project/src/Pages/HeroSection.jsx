
const HeroSection = () => {
return (
    <div className="relative w-full h-[100vh] overflow-hidden">
    <img
        src="pine.jpg"
        alt="hill"
        className="absolute inset-0 w-full h-full object-cover"/>
        {/* blur */}
        <div className="w-full h-[100vh] absolute bg-black/29 backdrop-blur-[2px]">
        {/* logo */}
            <div className="flex justify-center items-center">
                <div className="w-[25vh] h-[25vh] m-5" >
                    <img src="Logo.png" className="w-full h-fit object-contain"/>
                </div>
            </div>
        {/* text  */}
            <div className="flex justify-center items-center  mt-[12vh]">
                <div>
                    <h1 className="flex justify-center items-center text-5xl text-white font-instrument">Not Just a Stay <br></br>A Hillside Story</h1>
                </div>
            </div>
        {/* button */}
            <div className="flex justify-center items-center font-instrument italic">
                    <button className="bg-white rounded-full w-[12vh] h-[3.5vh] m-[3vh]">Gallery</button>
            </div>
        {/* Query */}
            <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 mb-10">
            <h2 className="text-white font-instrument">
                <u>What will I get?</u>
            </h2>
            </div>
        {/* Up arrow */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                <img src="arrow.png" alt="Up Arrow" className="w-10 h-10" />
            </div>

        </div>
        
    </div>
);
};

export default HeroSection;
