'use client';

import BrandCard from '@/components/Brandcard';

export default function Furniture() {
    return (
        <div className="text-white min-h-screen font-sans">
            {/* Responsive Grid */}
            <div className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                <BrandCard imageSrc="/Brandlogo/ARTE_BROTTO.png" redirectUrl="https://www.artebrotto.it/en/" brandName="Arte Brotto" />
                <BrandCard imageSrc="/Brandlogo/DITRE_ITALIA.svg" redirectUrl="https://www.ditreitalia.com/en/" brandName="Ditre Italia" />
                <BrandCard imageSrc="/Brandlogo/SABA_ITALIA .svg" redirectUrl="https://sabaitalia.com/en" brandName="Saba Italia" />
                <BrandCard imageSrc="/Brandlogo/POTOCCO.png" redirectUrl="https://potocco.it/en/" brandName="Potocco" />
                <BrandCard imageSrc="/Brandlogo/NICOLINE.png" redirectUrl="https://www.nicoline.it/en" brandName="Nicoline" />
                <BrandCard imageSrc="/Brandlogo/KRISTALIA.svg" redirectUrl="https://www.kristalia.it/en/" brandName="Kristalia" />
                <BrandCard imageSrc="/Brandlogo/FAMA.png" redirectUrl="https://famasofas.com/inicio-en" brandName="Fama" />
                <BrandCard imageSrc="/Brandlogo/CAPO_D’OPERA.svg" redirectUrl="https://capodopera.it/en/" brandName="Capo D’Opera" />
                <BrandCard imageSrc="/Brandlogo/TACCHINI.svg" redirectUrl="https://www.tacchini.it/en/" brandName="Tacchini" />
                <BrandCard imageSrc="/Brandlogo/LA_MANUFACTURE.svg" redirectUrl="https://lamanufacture-paris.fr/en/" brandName="La Manufacture" />
                <BrandCard imageSrc="/Brandlogo/GIORGIO_CASA.png" redirectUrl="https://giorgiocasa.it/en/" brandName="Giorgio Casa" />
                <BrandCard imageSrc="/Brandlogo/TONIN_CASA.svg" redirectUrl="https://www.tonincasa.it/en/collection/modern-collection/" brandName="Tonin Casa" />
                <BrandCard imageSrc="/Brandlogo/INCLASS.svg" redirectUrl="https://inclass.es/" brandName="Inclass" />
                <BrandCard imageSrc="/Brandlogo/SITIA.svg" redirectUrl="https://sitia.com/en/" brandName="Sitia" />
                <BrandCard imageSrc="/Brandlogo/HURTADO.svg" redirectUrl="https://www.hurtado.eu/en" brandName="Hurtado" />
                <BrandCard imageSrc="/Brandlogo/ALCAROL.jpg" redirectUrl="https://www.alcarol.com/" brandName="Alcarol" />
                <BrandCard imageSrc="/Brandlogo/DRIADE.webp" redirectUrl="https://www.driade.com/en/" brandName="Driade" />
                <BrandCard imageSrc="/Brandlogo/TWILS.png" redirectUrl="https://www.twils.it/en/" brandName="Twils" />
                <BrandCard imageSrc="/Brandlogo/STURM_MILANO.webp" redirectUrl="https://sturmmilano.com/" brandName="Sturm Milano" />
                <BrandCard imageSrc="/Brandlogo/PIANCA.png" redirectUrl="https://pianca.com/en/" brandName="Pianca" />
                <BrandCard imageSrc="/Brandlogo/ULIVI.png" redirectUrl="https://ulivisalotti.it/en/" brandName="Ulivi" />
            </div>
        </div>
    );
}
