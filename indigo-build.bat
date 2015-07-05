@ECHO OFF
SET me=%~n0
REM create a log file named [script].YYYYMMDDHHMMSS.txt
SET log=%cd%\%me%.%DATE:~10,4%_%DATE:~4,2%_%DATE:~7,2%%TIME:~0,2%_%TIME:~3,2%_%TIME:~6,2%.txt
:: The "main" logic of the script
IF EXIST "%log%" DELETE /Q %log% >NUL

REM Please check that you have installed python and node js
echo node --version  >%log% 2>&1
node --version >>%log% 2>&1
echo python --version  >>%log% 2>&1
python --version >>%log% 2>&1
echo npm --version >>%log% 2>&1
npm --version >>%log% 2>&1
echo npm install >>%log% 2>&1
npm install >>%log% 2>&1
type %log% 2>&1



cd ./indigo-node


call :echos %node --version%


:: function
:echos
echo %*
EXIT /B 0
