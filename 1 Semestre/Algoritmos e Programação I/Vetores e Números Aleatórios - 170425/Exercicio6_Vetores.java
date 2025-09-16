import java.util.Scanner;

public class Exercicio6_Vetores {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int[] A = new int[4];
        int[] B = new int[7];
        int[] C = new int[A.length + B.length];

        System.out.println("Digite 4 elementos para o vetor A:");
        for (int i = 0; i < A.length; i++) {
            System.out.print("A[" + i + "]: ");
            A[i] = entrada.nextInt();
        }

        System.out.println("\nDigite 7 elementos para o vetor B:");
        for (int i = 0; i < B.length; i++) {
            System.out.print("B[" + i + "]: ");
            B[i] = entrada.nextInt();
        }

        for (int i = 0; i < A.length; i++) {
            C[i] = A[i];
        }

        for (int i = 0; i < B.length; i++) {
            C[i + A.length] = B[i];
        }

        System.out.println("\nVetor C (junção de A e B):");
        for (int i = 0; i < C.length; i++) {
            System.out.println("C[" + i + "] = " + C[i]);
        }

        entrada.close();
    }
}

