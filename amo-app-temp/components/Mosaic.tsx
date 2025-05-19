'use client';

import BrandCard from '@/components/Brandcard';

export default function Mosaic() {
    return (
        <div className="text-white min-h-screen font-sans">
            {/* Responsive Grid */}
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard
                    imageSrc="/Brandlogo/MUTINA.svg"
                    redirectUrl="https://www.mutina.it/en/"
                    brandName="MUTINA"
                />
                <BrandCard
                    imageSrc="/Brandlogo/WINCKLEMANS.png"
                    redirectUrl="https://www.winckelmans.com/en/home/"
                    brandName="WINCKLEMANS"
                />
                <BrandCard
                    imageSrc="/Brandlogo/VIDREPUR.svg"
                    redirectUrl="https://vidrepur.com/"
                    brandName="VIDREPUR"
                />
                <BrandCard
                    imageSrc="/Brandlogo/SICIS.png"
                    redirectUrl="https://www.sicis.com/GLOBAL/en/"
                    brandName="SICIS"
                />
                <BrandCard
                    imageSrc="/Brandlogo/LENID.png"
                    redirectUrl="http://www.lenid.it/en/"
                    brandName="LENID"
                />
                <BrandCard
                    imageSrc="/Brandlogo/M+.webp"
                    redirectUrl="https://www.mplusdesign.it/en/"
                    brandName="M+"
                />
                <BrandCard
                    imageSrc="/Brandlogo/FOGLIE_D’ORO.webp"
                    redirectUrl="https://fogliedoroparquet.com/en/"
                    brandName="FOGLIE D’ORO"
                />
            </div>
        </div>
    );
}
