//Faça uma função recursiva para calcular os números de Pell. Os números de Pell são definidos pela seguinte recursão:
//𝑝(𝑛) = 0 𝑠𝑒 𝑛 = 0
//𝑝(𝑛) = 1 𝑠𝑒 𝑛 = 1
//𝑝(𝑛) = 2𝑝(𝑛 − 1) + 𝑝(𝑛 − 2) 𝑠𝑒 𝑛 > 1


public class Exercicio13 {
    public static int pell(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return 2 * pell(n - 1) + pell(n - 2);
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Pell(" + n + ") -> " + pell(n));
    }
}