'use client';
import Link from 'next/link';
import Image from 'next/image';

interface BrandCardProps {
    imageSrc: string;
    redirectUrl: string;
    brandName?: string;
}

export default function BrandCard({ imageSrc, redirectUrl, brandName = 'Brand Name' }: BrandCardProps) {
    return (
        <Link href={redirectUrl} target="_blank" rel="noopener noreferrer">
            <div className=" h-52 rounded-xl overflow-hidden shadow-lg bg-[#ccccca] hover:shadow-xl transition-shadow duration-300 cursor-pointer">

                {/* Image filling the top 2/3 */}
                <div className="relative h-2/3 w-full p-2">
                    <div className="relative w-full h-full rounded-md overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={brandName}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>


                {/* Bottom section with brand name and arrow */}
                <div className="h-1/3 bg-gray-600 text-white flex items-center justify-center gap-2 px-4">
                    <span className="text-sm font-bold">{brandName}</span>

                </div>
            </div>
        </Link>
    );
}
