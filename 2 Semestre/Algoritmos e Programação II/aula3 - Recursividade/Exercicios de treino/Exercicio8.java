//Faça uma função recursiva que calcule o valor da série S descrita a seguir para um valor
//n > 0 a ser fornecido como parâmetro para a mesma.
//5 10
//𝑆 = 2 + +
//2 3
//+ … +
//1 + 𝑛2

public class Exercicio8 {
    public static double serieS(int n) {
        if (n == 1) {
            return 2.0; 
        }
        return ((1 + Math.pow(n, 2)) / (double) n) + serieS(n - 1);
    }

    public static void main(String[] args) {
        int n = 4;
        System.out.println("Série S com n = " + n + " -> " + serieS(n));
    }
}
