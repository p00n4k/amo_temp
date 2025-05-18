'use client';

import BrandCard from '@/components/Brandcard';

export default function Other() {
    return (
        <div className="bg-[#333] text-white min-h-screen font-sans">

            {/* Responsive Grid */}
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard
                    imageSrc="/Brandlogo/Atlas.png"
                    redirectUrl="https://www.atlasconcorde.com/en"
                    brandName="Atlas Concorde"
                />
                <BrandCard
                    imageSrc="/Brandlogo/Atlas.png"
                    redirectUrl="https://www.atlasconcorde.com/en"
                    brandName="Atlas Concorde"
                />
                <BrandCard
                    imageSrc="/Brandlogo/Atlas.png"
                    redirectUrl="https://www.atlasconcorde.com/en"
                    brandName="Atlas Concorde"
                />
                <BrandCard
                    imageSrc="/Brandlogo/Atlas.png"
                    redirectUrl="https://www.atlasconcorde.com/en"
                    brandName="Atlas Concorde"
                />
                <BrandCard
                    imageSrc="/Brandlogo/Atlas.png"
                    redirectUrl="https://www.atlasconcorde.com/en"
                    brandName="Atlas Concorde"
                />
            </div>
        </div>
    );
}
