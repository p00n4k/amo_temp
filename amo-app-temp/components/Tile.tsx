'use client';

import BrandCard from '@/components/Brandcard';

export default function Tile() {
    return (
        <div className=" text-white min-h-screen font-sans">
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard
                    imageSrc="/Brandlogo/ATLAS_CONCORDE.svg"
                    redirectUrl="https://www.atlasconcorde.com/en/"
                    brandName="ATLAS CONCORDE"
                />
                <BrandCard
                    imageSrc="/Brandlogo/ATLAS_PLAN .png"
                    redirectUrl="https://www.atlasplan.com/en/"
                    brandName="ATLAS PLAN"
                />
                <BrandCard
                    imageSrc="/Brandlogo/ENERGIEKER.svg"
                    redirectUrl="https://www.energieker.it/en/"
                    brandName="ENERGIEKER"
                />
                <BrandCard
                    imageSrc="/Brandlogo/MIRAGE.svg"
                    redirectUrl="https://www.mirage.it/it/en"
                    brandName="MIRAGE"
                />
                <BrandCard
                    imageSrc="/Brandlogo/CAESAR.svg"
                    redirectUrl="https://www.caesar.it/en/"
                    brandName="CAESAR"
                />
                <BrandCard
                    imageSrc="/Brandlogo/SETTECENTO.svg"
                    redirectUrl="https://www.settecento.com/en/"
                    brandName="SETTECENTO"
                />
                <BrandCard
                    imageSrc="/Brandlogo/COTTO_D’ESTE .svg"
                    redirectUrl="https://www.cottodeste.com/"
                    brandName="COTTO D’ESTE"
                />
                <BrandCard
                    imageSrc="/Brandlogo/BLUSTYLE.png"
                    redirectUrl="https://www.blustyle.eu/"
                    brandName="BLUSTYLE"
                />
                <BrandCard
                    imageSrc="/Brandlogo/SANT’AGOSTINO.svg"
                    redirectUrl="https://www.ceramicasantagostino.it/en/"
                    brandName="SANT’AGOSTINO"
                />
                <BrandCard
                    imageSrc="/Brandlogo/KEOPE.svg"
                    redirectUrl="https://www.keope.com/en"
                    brandName="KEOPE"
                />
            </div>
        </div>
    );
}
