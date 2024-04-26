import  "./Sponsor.css"
export const Image = ({image, width}) => {
    return (
     
        <div className="col-md-4 img-margin-bottom ">
 <div className="container w-75 imgs sponsor-style">
<img 
className="img-fluid mx-auto d-block sponsor-img"
src={image}
alt=""
width={width}
/>
</div>
        </div>
       
    )
}