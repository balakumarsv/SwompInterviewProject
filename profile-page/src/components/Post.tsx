import image1 from "../../images/post-images/image-1.jpg";
import image2 from "../../images/post-images/image-2.jpg";
import image3 from "../../images/post-images/image-3.jpg";
import image4 from "../../images/post-images/image-4.jpg";
import image5 from "../../images/post-images/image-5.jpg";
import image6 from "../../images/post-images/image-6.jpg";
import image7 from "../../images/post-images/image-7.jpg";
import image8 from "../../images/post-images/image-8.jpg";
import "./Post.css";
export default function Post(){
    return(
        <div className="post-images"> 
            <a href={image1.src}><img src= {image1.src}/></a>
            <a href={image2.src}><img src= {image2.src}/></a>
            <a href={image3.src}><img src= {image3.src}/></a>
            <a href={image4.src}><img src= {image4.src}/></a>
            <a href={image5.src}><img src= {image5.src}/></a>
            <a href={image6.src}><img src= {image6.src}/></a>
            <a href={image7.src}><img src= {image7.src}/></a>
            <a href={image8.src}><img src= {image8.src}/></a>           
        </div>
    );
}