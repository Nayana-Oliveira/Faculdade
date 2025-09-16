public class Pares {
    public static void main(String[] args) {

        int contador; //declarando o contador
        contador = 0; //inicializando o contador 
        int resto;

        while(contador <= 10) {
            resto = contador % 2; //calcula o resto da divisão

            if (resto == 0) {
                System.out.println("O numero "+ contador + "é par");
            }
            contador++;
        }
    }
}
