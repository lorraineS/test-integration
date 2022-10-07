import type { FC } from 'react';
import React from 'react';

interface SliderItemProps {
    authorImg: string,
    name: string,
    text: string
}

const SliderItem = ({ authorImg, name, text }:SliderItemProps) => {
    return (
      <figure className="flex-none font-title font-light text-sm px-4 w-full">
        <figcaption>
          {name}
          <img className="my-[10px] w-[70px] h-[70px] rounded-full mx-auto" src={authorImg} />
        </figcaption>
        <p className="">{text}</p>
      </figure>
    );
}

const Slider: FC = () => {
  return (
    <div className="py-5 sm:max-w-[310px] mx-auto overflow-hidden">
        {/*
            Si besoin d'avoir un temps dynamique en fonction des slides,
            nous pourrons utiliser la valeur arbitraire suivante : {`animate-[slide_${nbr_slides * 3}s_linear_3s_forwards]`}
        */}
        <div className="animate-slide flex justify-start">
            <SliderItem
                authorImg="https://i.pravatar.cc/80?img=1"
                name="John Doe"
                text="Ce site est excellent, merci beaucoup pour les conseils !"
            />
            <SliderItem
                authorImg="https://i.pravatar.cc/80?img=2"
                name="Franck Doe 2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris sollicitudin tortor sagittis dapibus vitae at arcu."
            />
            <SliderItem
                authorImg="https://i.pravatar.cc/80?img=3"
                name="Tim Doe 3"
                text="Suspendisse non tempus arcu. Morbi semper leo nec justo viverra, quis iaculis purus suscipit."
            />
        </div>
    </div>
  );
};

export default Slider;
