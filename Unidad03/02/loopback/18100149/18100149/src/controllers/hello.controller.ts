import { get, post, requestBody } from '@loopback/rest'
import { request } from 'http'
import { numberToText,fechaTexto,tTranscurrido} from '../NumeroaTexto'

export class HelloController {

  @get ("/hello")
  hello():string{
    return "Hola soy Alfonso"
  }

  @post("/textNumber")
  textNumber(@requestBody() req:any): string{
    return numberToText(Number( req.numero));
  }

  @post("/textDate")
  textDate(@requestBody() req:any): string{
    return fechaTexto(String(req.fecha));
  }

  @post("/Fechas")
  Fechas(@requestBody() req:string): string{
   return tTranscurrido(req.tiempo)
  }

}

