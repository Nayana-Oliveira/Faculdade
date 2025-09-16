//Escreva uma função recursiva que calcule a sequência dada por:
//𝐹(1) = 1
//𝐹(2) = 2
//𝐹(𝑛) = 2 ∗ 𝐹(𝑛 − 1) + 3 ∗ 𝐹(𝑛 − 2).


public class Exercicio11 {
    public static int sequenciaF(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        return 2 * sequenciaF(n - 1) + 3 * sequenciaF(n - 2);
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("F(" + n + ") -> " + sequenciaF(n));
    }
}