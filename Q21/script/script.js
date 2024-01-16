function printNos(n)
    {
        if(n > 0)
        {
            printNos(n - 1);
            document.write(n + " ");
        }
        return;
    }
     		