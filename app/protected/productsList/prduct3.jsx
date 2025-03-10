import Image from 'next/image';

const RefrigeratorRegulationsBanner = () => {
  return (
    <div className="bg-white ">
      
      {/* Background Image Section */}
      <div className='rounded-lg overflow-hidden shadow-lg flex  max-w-[1200px] h-[165px] w-full
 mx-auto relative '>
        {/* Image Section */}
        <div className="w-[63.5%]  ">
        <Image 
  src="/refrigerator.webp" 
  alt="Fan Regulations" 
  width={600} 
  height={165}
  className="w-full h-full object-fill"
/>


        </div>
        
        {/* Text Section with Styled Shape */}
        <div 
          className="absolute top-0 bottom-0 w-[41.2%] bg-[#e8e6e6]  flex items-center right-0 rounded-bl-[16px] rounded-r-[11px]" 
          style={{ 
            clipPath: 'polygon(4% 0%, 100% 0%, 100% 100%, 0% 100%)', 
          }}
        >
          <div className='text-center ml-18'>
            <h2 className="text-orange-500 text-[12px] md:text-[28px] text-center font-semibold mt-[10px] ">Fan Regulations</h2>
            <p className="text-center text-[10px] md:text-[15px] mt-[8px] w-[200px] md:w-[362px] leading-[16px] font-[600px]">
              The electric fans to be registered under Pakistan Energy Label Regulations for Fans, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefrigeratorRegulationsBanner