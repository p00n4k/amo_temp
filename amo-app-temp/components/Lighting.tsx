'use client';

import BrandCard from '@/components/Brandcard';

export default function Lighting() {
    return (
        <div className="text-white min-h-screen font-sans">
            {/* Responsive Grid */}
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard
                    imageSrc="/Brandlogo/VISTORI.svg"
                    redirectUrl="https://vistosi.it/?lang=en"
                    brandName="VISTOSI"
                />
                <BrandCard
                    imageSrc="/Brandlogo/PANZERI.jpg"
                    redirectUrl="https://panzeri.it/en/"
                    brandName="PANZERI"
                />
                <BrandCard
                    imageSrc="/Brandlogo/MARSET.svg"
                    redirectUrl="https://www.marset.com/en/"
                    brandName="MARSET"
                />
                <BrandCard
                    imageSrc="/Brandlogo/CATTELANI_SMITH.png"
                    redirectUrl="https://www.catellanismith.com/en/"
                    brandName="CATTELANI SMITH"
                />
                <BrandCard
                    imageSrc="/Brandlogo/SERIP.png"
                    redirectUrl="https://seripdesign.com/en/home"
                    brandName="SERIP"
                />
                <BrandCard
                    imageSrc="/Brandlogo/EUROLUCE.png"
                    redirectUrl="https://eurolucelampadari.it/en/"
                    brandName="EUROLUCE"
                />
                <BrandCard
                    imageSrc="/Brandlogo/ANTONANGELI.png"
                    redirectUrl="https://antonangelilighting.com/"
                    brandName="ANTONANGELI"
                />
                <BrandCard
                    imageSrc="/Brandlogo/NEMO_LIGHTING.svg"
                    redirectUrl="https://www.nemolighting.com/usa/en/"
                    brandName="NEMO LIGHTING"
                />
                <BrandCard
                    imageSrc="/Brandlogo/FONTANA_ARTE.webp"
                    redirectUrl="https://www.fontanaarte.com/en/"
                    brandName="FONTANA ARTE"
                />
            </div>
        </div>
    );
}
