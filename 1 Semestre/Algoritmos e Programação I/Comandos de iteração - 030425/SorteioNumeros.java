import java.util.Random;

public class SorteioNumeros {
    public static void main(String[] args) {
        //Criando um vetor para armazenar os 10 numeros sorteados
        int[] numeros = new int[10];

        //Instanciando o objeto Random para gerar os númeors aleatórios
        Random random = new Random();

        //Sorteando 10 números entre 1 e 10 e armazenando no vetor
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = random.nextInt(10)+ 1; //Gera um número entre 1 e 10
        }

        //Exibindo os números sorteados
        System.out.println("Números sorteados: ");
        for (int num : numeros) {
            System.out.print(num + " ");
        }

        //Encontrando o menor número no vetor
        int menor = numeros[0];
        for (int i = 1; i <numeros.length; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }

        //Exibindo o menor número
        System.out.println("O menor número sorteado é: " + menor);

    }
}

