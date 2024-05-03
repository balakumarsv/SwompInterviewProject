"use client";
import anath from '../../images/ananth.jpeg';
import waren from '../../images/warren.jpeg'
import elon from '../../images/elon.jpeg';
import jeff from '../../images/jeff.jpeg';
import trump from '../../images/teumb.jpeg';
import nita from '../../images/nita.jpeg';
import "./Friend.css";
export default function Friends () {
    return(
        <div>
            <div className="image-box">
                <a href={elon.src}><img className = "imagesize"src={elon.src}/></a>
                <a href={anath.src}><img className = "imagesize"src={anath.src}/></a>
                <a href={nita.src}><img className = "imagesize"src={nita.src}/></a>
                <a href={waren.src}><img className = "imagesize"src={waren.src}/></a>
                <a href={jeff.src}><img className = "imagesize"src={jeff.src}/></a>
                <a href={trump.src}><img className = "imagesize"src={trump.src}/></a>
            </div>
        </div>
    );
}