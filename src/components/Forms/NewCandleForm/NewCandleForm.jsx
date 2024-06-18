function BasicExample() {
  const handleFileUpload = (e) => {
    const formData = new FormData()
    formData.append("imageData", e.target.files[0])

    uploadServices
      .uploadimage(formData)
      .then((res) => {
        setCoasterData({ ...coasterData, imageUrl: res.data.cloudinary_url })
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form.Group className="mb-3" controlId="image">
      <Form.Label>Imagen (URL)</Form.Label>
      <Form.Control type="file" onChange={handleFileUpload} />
    </Form.Group>
  )
}

export default BasicExample
