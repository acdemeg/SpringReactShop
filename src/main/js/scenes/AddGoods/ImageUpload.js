import React from 'react';
import './ImageUpload.css';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        fileName: file.name,
        imagePreviewUrl: reader.result
      });

      if(file){
        this.props.setPicture({
          fileName: file.name,
          imagePreviewUrl: reader.result
        })
      }
    }

    reader.readAsDataURL(file);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      if(this.props.product){
        $imagePreview = (this.props.product.pathImage) 
          ? <img 
              src={(this.props.product.pathImage.startsWith("data:image/")) 
              ? this.props.product.pathImage : `/upload/products/${this.props.product.pathImage}` }
           />
          : <img src={`/upload/products/notImage.png`}/>
        
      }
      else {
        $imagePreview = (
          <div className="previewText">Пожалуйста выбирете изображение для превью</div>
          );
      }
    }

    return (
      <div className="previewComponent">
          <input className="fileInput" 
            type="file"
            name="imageProduct" 
            onChange={(e)=>this._handleImageChange(e)} />
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
