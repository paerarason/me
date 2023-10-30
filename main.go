package main
import (
	"net/http"
	"html/template"
)

func HomeFunc(w http.ResponseWriter,r *http.Request){
   temp,err:=template.ParseFiles("index.html")
   if err!=nil{
	 http.Error(w,err.Error(),http.StatusInternalServerError)
	 return 
   }
   data := struct {
	Title string
}{"My Portfolio"}
   err=temp.Execute(w,data)
   if err!=nil{
	http.Error(w,err.Error(),http.StatusInternalServerError)
   }
}

func main(){
   

	http.HandleFunc("/",HomeFunc)
	http.ListenAndServe(":8080",nil)
}