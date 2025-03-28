import React from "react";
import castle from "../assets/castle.png";

export default function Home() {
    return (
            <div className="container">    
                <h1 className="text-4xl font-extrabold drop-shadow-lg mb-4">Discover Your Disney Destiny!</h1>
                
             <img src={castle} alt="Castle" />
                
                <p className="text-lg leading-relaxed">
                    Once upon a time, in a land not so far away—actually, right here on your screen—a group of mischievous coders set out on a quest.
                    Their mission? To create the ultimate Disney character guessing game using the power of backward chaining—which sounds like a wizard spell, 
                    but we promise it’s just really cool AI logic.
                </p>
                
                <p className="text-lg leading-relaxed mt-4">
                    Have you ever wondered which Disney character you truly are? Are you as fearless as Mulan? As mischievous as Stitch? As cool as Elsa?
                    Well, fear not, brave traveler, because you are about to embark on a quest to uncover your true Disney destiny!
                </p>
                
                <p className="text-lg leading-relaxed mt-4 font-semibold">
                    But beware! This journey is filled with tough choices, magical riddles, and—gasp—yes or no questions! Will you be noble? Sneaky?
                    A royal with a secret identity? Or just someone who really, really loves adventure?
                </p>
                
            </div>
    );
}
