import java.util.Scanner;

public class Exercicio4_Vetores {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int[] A = new int[5];
        int[] B = new int[5];

        System.out.println("Digite 5 números inteiros para o vetor A:");
        for (int i = 0; i < A.length; i++) {
            System.out.print("A[" + i + "]: ");
            A[i] = entrada.nextInt();
        }

        for (int i = 0; i < B.length; i++) {
            B[i] = A[i] * 3;
        }

        System.out.println("\nElementos do vetor B (A * 3):");
        for (int i = 0; i < B.length; i++) {
            System.out.println("B[" + i + "] = " + B[i]);
        }

        entrada.close();
    }
}
