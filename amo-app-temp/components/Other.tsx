'use client';

import BrandCard from '@/components/Brandcard';

export default function Other() {
    return (
        <div className="text-white min-h-screen font-sans">
            {/* Responsive Grid */}
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard
                    imageSrc="/Brandlogo/ILLULIAN.png"
                    redirectUrl="https://www.illulian.com/"
                    brandName="ILLULIAN"
                />
                <BrandCard
                    imageSrc="/Brandlogo/STEPEVI.svg"
                    redirectUrl="https://www.stepevi.fr/"
                    brandName="STEPEVI"
                />
                <BrandCard
                    imageSrc="/Brandlogo/GAN_RUGS.png"
                    redirectUrl="https://www.gan-rugs.com/en/"
                    brandName="GAN RUGS"
                />
                <BrandCard
                    imageSrc="/Brandlogo/NANIMAQUINA.svg"
                    redirectUrl="https://nanimarquina.com/en"
                    brandName="NANIMAQUINA"
                />
                <BrandCard
                    imageSrc="/Brandlogo/ADRIANI_ROSSI.png"
                    redirectUrl="https://www.adrianierossi.com/"
                    brandName="ADRIANI ROSSI"
                />
                <BrandCard
                    imageSrc="/Brandlogo/LITOKOL.jpg"
                    redirectUrl="https://www.litokol.it/en/"
                    brandName="LITOKOL"
                />
                <BrandCard
                    imageSrc="/Brandlogo/ETERNO_IVICA.jpg"
                    redirectUrl="https://www.eternoivica.com/en"
                    brandName="ETERNO IVICA"
                />
            </div>
        </div>
    );
}
