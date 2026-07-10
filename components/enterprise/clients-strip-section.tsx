"use client"

import { InfiniteSlider } from "@/components/21dev/InfiniteSlider/infinite-slider"
import { PixelIcon } from "@/components/pixel-icon"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { useTranslations } from "next-intl"

const teamPhotos = [
  {
    id:1,
    src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX////zUSN/uQICpO//uQH///39//r//fLr///tsxD//+Z5qQDxUSX//9wAkdHu///+/+vQjXz/9O1pudHQjXPR+PnTSx1/tAD7+coAo/HhUCXu+dP5//oAm+N4rgCAuAGnwm0Ak9e2QRXESCHBiXv/9fLu+NlvnwBzmgDVUivHiYT/9Pbr+stwqAB4pADAinLCkGfVs6Srv3T9+P/3/+/J+fr+87f7+MoAgbkNjslqqsb+78TqvD7frCJssME4QYTWAAACUElEQVR4nO3dXXPSQBSA4ZV4diEFkqKtDa6iVuoH9atUW9T6/39WN9DYXtSZwslKyLxvh7A3zeyTXTq92cEYIiIiIiIiIiIiIiIiIiIiIqKGJlJetj2LmMntpXKuNWh6d+fZfmFDUz5Lqe6irAbJv2bolK0+gTZPVeXRjOLeHKo6fjsVL3Lybk/V+zzaKrrDvqrx/sh7sc9fdjqTyaTTWb6tPZjspTGFjzQFoQ1rWAo1Idyu0CPceWH7d2n7he3fpQgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIEOEGwv7yZ+1Bf7w/tV7saWOF4o7Hqj58nDln5PTTM1Wf4wntl6eqvn6biTfm5OyVqjMXbZeKG2nKB84Yn4lLc12NPU8szhqTeTeaWk1iI07x78Nba3DbvGTm4aOoI8Zbw/IY9ebnr8XMZEnzmW4WNWnuvbfi2YffFevDAs7n/ly1hOFe8YgHur4fZOfOzPMfRxt3EV6DeH9Ls8vXNw1vXg8aVG/Dxc+udWJ//e6puor3P013mBRFkRSr64MHSTV48SQzYZMd9R6r6g1iCsNEN6lIdkeoqBJeINx5Yft3KUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRPh/hZxGQBhTuFAJkzp3aZyDpNnlYqhp8WclvKrhdF6krwXOuqqy8nisiEsHqtKIR53rqcHf6UxERERERERERERERERERERERERb7hpQ1W08w53kmAAAAABJRU5ErkJggg==`,
    alt: 'Microsoft'
  },
  {
    id:2,
    src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjQSLem8Vaj-cvv6Tql67XLdAHIk2E1rY64b2o5Plw&s=10`,
    alt: `Accenture`,
  },
  {
    id:3,
    src:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10`,
    alt: 'Meta'
  },
  {
    id:4,
    src: `https://img.appmaster.io/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp`,
    alt: `AWS`,
  },
  {
    id:5,
    src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX////zUSN/uQICpO//uQH///39//r//fLr///tsxD//+Z5qQDxUSX//9wAkdHu///+/+vQjXz/9O1pudHQjXPR+PnTSx1/tAD7+coAo/HhUCXu+dP5//oAm+N4rgCAuAGnwm0Ak9e2QRXESCHBiXv/9fLu+NlvnwBzmgDVUivHiYT/9Pbr+stwqAB4pADAinLCkGfVs6Srv3T9+P/3/+/J+fr+87f7+MoAgbkNjslqqsb+78TqvD7frCJssME4QYTWAAACUElEQVR4nO3dXXPSQBSA4ZV4diEFkqKtDa6iVuoH9atUW9T6/39WN9DYXtSZwslKyLxvh7A3zeyTXTq92cEYIiIiIiIiIiIiIiIiIiIiIqKGJlJetj2LmMntpXKuNWh6d+fZfmFDUz5Lqe6irAbJv2bolK0+gTZPVeXRjOLeHKo6fjsVL3Lybk/V+zzaKrrDvqrx/sh7sc9fdjqTyaTTWb6tPZjspTGFjzQFoQ1rWAo1Idyu0CPceWH7d2n7he3fpQgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIEOEGwv7yZ+1Bf7w/tV7saWOF4o7Hqj58nDln5PTTM1Wf4wntl6eqvn6biTfm5OyVqjMXbZeKG2nKB84Yn4lLc12NPU8szhqTeTeaWk1iI07x78Nba3DbvGTm4aOoI8Zbw/IY9ebnr8XMZEnzmW4WNWnuvbfi2YffFevDAs7n/ly1hOFe8YgHur4fZOfOzPMfRxt3EV6DeH9Ls8vXNw1vXg8aVG/Dxc+udWJ//e6puor3P013mBRFkRSr64MHSTV48SQzYZMd9R6r6g1iCsNEN6lIdkeoqBJeINx5Yft3KUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRPh/hZxGQBhTuFAJkzp3aZyDpNnlYqhp8WclvKrhdF6krwXOuqqy8nisiEsHqtKIR53rqcHf6UxERERERERERERERERERERERERb7hpQ1W08w53kmAAAAABJRU5ErkJggg==`,
    alt: 'Microsoft'
  },
  {
    id:6,
    src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjQSLem8Vaj-cvv6Tql67XLdAHIk2E1rY64b2o5Plw&s=10`,
    alt: `Accenture`,
  },
  {
    id:7,
    src:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10`,
    alt: 'Meta'
  },
  {
    id:8,
    src: `https://img.appmaster.io/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp`,
    alt: `AWS`,
  },
  {
    id:9,
    src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX////zUSN/uQICpO//uQH///39//r//fLr///tsxD//+Z5qQDxUSX//9wAkdHu///+/+vQjXz/9O1pudHQjXPR+PnTSx1/tAD7+coAo/HhUCXu+dP5//oAm+N4rgCAuAGnwm0Ak9e2QRXESCHBiXv/9fLu+NlvnwBzmgDVUivHiYT/9Pbr+stwqAB4pADAinLCkGfVs6Srv3T9+P/3/+/J+fr+87f7+MoAgbkNjslqqsb+78TqvD7frCJssME4QYTWAAACUElEQVR4nO3dXXPSQBSA4ZV4diEFkqKtDa6iVuoH9atUW9T6/39WN9DYXtSZwslKyLxvh7A3zeyTXTq92cEYIiIiIiIiIiIiIiIiIiIiIqKGJlJetj2LmMntpXKuNWh6d+fZfmFDUz5Lqe6irAbJv2bolK0+gTZPVeXRjOLeHKo6fjsVL3Lybk/V+zzaKrrDvqrx/sh7sc9fdjqTyaTTWb6tPZjspTGFjzQFoQ1rWAo1Idyu0CPceWH7d2n7he3fpQgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIEOEGwv7yZ+1Bf7w/tV7saWOF4o7Hqj58nDln5PTTM1Wf4wntl6eqvn6biTfm5OyVqjMXbZeKG2nKB84Yn4lLc12NPU8szhqTeTeaWk1iI07x78Nba3DbvGTm4aOoI8Zbw/IY9ebnr8XMZEnzmW4WNWnuvbfi2YffFevDAs7n/ly1hOFe8YgHur4fZOfOzPMfRxt3EV6DeH9Ls8vXNw1vXg8aVG/Dxc+udWJ//e6puor3P013mBRFkRSr64MHSTV48SQzYZMd9R6r6g1iCsNEN6lIdkeoqBJeINx5Yft3KUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRPh/hZxGQBhTuFAJkzp3aZyDpNnlYqhp8WclvKrhdF6krwXOuqqy8nisiEsHqtKIR53rqcHf6UxERERERERERERERERERERERERb7hpQ1W08w53kmAAAAABJRU5ErkJggg==`,
    alt: 'Microsoft'
  },
  {
    id:10,
    src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjQSLem8Vaj-cvv6Tql67XLdAHIk2E1rY64b2o5Plw&s=10`,
    alt: `Accenture`,
  },
  {
    id:11,
    src:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10`,
    alt: 'Meta'
  },
  {
    id:12,
    src: `https://img.appmaster.io/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp`,
    alt: `AWS`,
  },

]

export const ClientsStripSection = () => {
  const t = useTranslations("teamStrip")

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn scale className="flex justify-center mb-4">
          <PixelIcon type="platform" size={40} />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <p className="text-[10px] tracking-widest uppercase text-black/30 mb-6 text-center">
            {t("label")}
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={100} scale>
          <InfiniteSlider gap={12} speed={40}>
            {teamPhotos.map((photo) => (
              <div
                key={photo.id}
                className="w-24 h-24 md:w-20 last:mr-[12px] md:h-20 rounded-2xl overflow-hidden shrink-0 border border-black/[0.06]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
