for f in *.gif; do 
  echo -n "\n\nProcessing $f ... " >> "log.txt"
  if [ ! -r "$f" ]; then
    echo "skip!";
    continue;
  fi;
  ffmpeg -i "$f" "${f%.gif}.mp4"
  ffmpeg -i "$f" -c vp9 -b:v 0 -crf 41 "${f%.gif}.webm"
  echo "done.";
done
