const loadPage = async () => {
    let again = true;

    const start = await Swal.fire({
        title: 'Welcome To Gubaku Games<br>By Daniansyah Chusyaidin',
        text: 'You have 3 Life',
        icon: 'success'
    });

    if (start) {
        while (again) {
            for (let i = 3; i > 0; i--) {

                let {value: player} = await Swal.fire({
                    title: 'Submit Weapon<br><br>gunting<br>batu<br>kertas',
                    input: 'text',
                    inputAttributes: {
                      autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Ok',
                    customClass: {
                        title:'styleBaru'
                    }});
        
                let nyawa = i - 1;
                if (nyawa == 2) {
                    nyawa = 'You have 2 Life';
                } else if (nyawa == 1) {
                    nyawa = 'Hurry Up, left 1 life again';
                } else {
                    nyawa = 'Uuupsss, GAME OVER';
                }
        
                let comp = Math.random();
        
                if (comp < 0.34) {
                    comp = 'gunting';
                } else if (comp >= 0.34 && comp <= 0.66) {
                    comp = 'batu';
                } else {
                    comp = 'kertas';
                }
        
                let result = '';
                if (player == comp) {
                    result = 'DRAW!';
                } else if (player == 'gunting') {
                    result = (comp == 'batu') ? 'LOSE!' : 'WIN!';
                } else if (player == 'batu') {
                    result = (comp == 'kertas') ? 'LOSE!' : 'WIN!';
                } else if (player == 'kertas') {
                    result = (comp == 'gunting') ? 'LOSE!' : 'WIN!';
                } else {
                    result = 'False input, Lets Try again!';
                }
        
                if (result == 'WIN!') {

                    await Swal.fire(
                        `Congratulations You ${result}`,
                        `You : ${player}<br>Computer : ${comp}`,
                        'success'
                      );
                    i = 0;
                } else if (result == 'LOSE!') {

                    await Swal.fire(
                        `Oh No, You ${result}<br>${nyawa}`,
                        `You : ${player}<br>Computer : ${comp}`,
                        'error'
                      );
                } else if (result == 'DRAW!') {

                    await Swal.fire(
                        `HHhuuuffhh, You ${result}<br>${nyawa}`,
                        `You : ${player}<br>Computer : ${comp}`,
                        'error'
                      );
                } else if (player == null) {

                    await Swal.fire('Canceled, Your Games was ended');
                    i = 0;
                } else {

                    await Swal.fire(
                        `Sorry ${result}<br><br>${nyawa}`,
                        ``,
                        'error'
                      );
                }
            }

            const againConfirm = await Swal.fire({
                title: 'Play again?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, play again!'
              })

              if (againConfirm.isConfirmed) {
                  again = true;
              } else {
                  again = false;
              }
        }
        

        await Swal.fire('Computer : Thank You');
    }
}

loadPage();
