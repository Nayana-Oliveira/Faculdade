//Escreva uma função recursiva que calcule a soma dos primeiros n cubos:
//𝑆(𝑛) = 13 + 23 + ⋯ + 𝑛3

public class Exercicio10 {
    public static int superFatorial(int n) {
        if (n == 1) return 1; 
        return fatorial(n) * superFatorial(n - 1);
    }

    private static int fatorial(int n) {
        if (n == 0) return 1;
        return n * fatorial(n - 1);
    }

    public static void main(String[] args) {
        int n = 4;
        System.out.println("Super fatorial de " + n + " -> " + superFatorial(n));
    }
}

