'use client';

import BrandCard from '@/components/Brandcard';

export default function Outdoor() {
    return (
        <div className="text-white min-h-screen font-sans">
            {/* Responsive Grid */}
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard
                    imageSrc="/Brandlogo/FAST.svg"
                    redirectUrl="https://www.fastspa.com/en/"
                    brandName="FAST"
                />
                <BrandCard
                    imageSrc="/Brandlogo/VARASCHIN.svg"
                    redirectUrl="https://varaschin.it/en/"
                    brandName="VARASCHIN"
                />
                <BrandCard
                    imageSrc="/Brandlogo/PLUST+.png"
                    redirectUrl="https://www.plust.it/en/"
                    brandName="PLUST+"
                />
                <BrandCard
                    imageSrc="/Brandlogo/MYYOUR.jpg"
                    redirectUrl="https://myyour.eu/en/"
                    brandName="MYYOUR"
                />
                <BrandCard
                    imageSrc="/Brandlogo/DITRE_ITALIA.svg"
                    redirectUrl="https://www.ditreitalia.com/en/outdoor"
                    brandName="DITRE ITALIA"
                />
                <BrandCard
                    imageSrc="/Brandlogo/SABA_ITALIA .svg"
                    redirectUrl="https://sabaitalia.com/en/products/outdoor"
                    brandName="SABA ITALIA"
                />
                <BrandCard
                    imageSrc="/Brandlogo/POTOCCO.png"
                    redirectUrl="https://potocco.it/en/products.html?location=outdoor"
                    brandName="POTOCCO"
                />
                <BrandCard
                    imageSrc="/Brandlogo/KRISTALIA.svg"
                    redirectUrl="https://www.kristalia.it/en/kind/outdoor-en/"
                    brandName="KRISTALIA"
                />
            </div>
        </div>
    );
}
