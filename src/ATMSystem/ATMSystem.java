package ATMSystem;

import java.util.Scanner;

public class ATMSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ATM atm = new ATM();

        // default accounts
        atm.addAccount(new Account("2334001", "Tarek", 1000));
        atm.addAccount(new Account("2334002", "Jeff", 1500));
        atm.addAccount(new Account("2334003", "Ivy", 2000));

        System.out.println("=== Welcome to Tee's Finance ATM System ===");

        while (true) {
            System.out.print("Enter your Account Number: ");
            String accNumber = scanner.nextLine();
            Account account = atm.getAccount(accNumber);

            if (account == null) {
                System.out.println("Account not found!");
                continue;
            }

            System.out.println("Welcome, " + account.getAccountHolderName());

            boolean session = true;
            while (session) {
                System.out.println("\n1. Check Balance");
                System.out.println("2. Deposit");
                System.out.println("3. Withdraw");
                System.out.println("4. Exit");

                System.out.print("Choose an option: ");
                int choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        account.displayBalance();
                        break;
                    case 2:
                        System.out.print("Enter deposit amount: ");
                        double deposit = scanner.nextDouble();
                        account.deposit(deposit);
                        break;
                    case 3:
                        System.out.print("Enter withdrawal amount: ");
                        double withdraw = scanner.nextDouble();
                        account.withdraw(withdraw);
                        break;
                    case 4:
                        session = false;
                        System.out.println("Thank you for using Tee's Finance ATM System!");
                        break;
                    default:
                        System.out.println("Invalid choice! The attempted action is not supported.");
                }
            }

            scanner.nextLine();
            System.out.print("Do you want to perform another transaction? (yes/no): ");
            String another = scanner.nextLine();
            if (!another.equalsIgnoreCase("yes")) {
                System.out.println("Goodbye! Have a nice day!");
                break;
            }
        }

        scanner.close();
    }
}
