---
title: "Syncing MarsEdit between multiple Macs using MacDropAny"
---

I just started getting into blogging again, and I rediscovered the fantastic app [MarsEdit][1] by Daniel Jalkut at [Red Sweater Software][2]. MarsEdit is, in my opinion, the best blogging software out there. It makes the blogging workflow so easy, and I appreciate all of the time and care he puts into the app. I have an iMac at home, and I take my MacBook Air practically everywhere I go. When I write a draft of a post using MarsEdit on one computer, a problem arises because that draft is stored locally on the one machine, and the other machine never sees it because there is no built-in syncing system in MarsEdit (yet!). There are a lot of ways to do this, most of them involving command line foo, but I really like the app [MacDropAny][3] by Zibity.

![][image-1]

There is really nothing wrong with using the command line, but if you prefer a graphical interface or if you are not comfortable with command line (so that there is no question as to what you just did), MacDropAny will serve you nicely. MacDropAny essentially will take any folder on your Mac and sync it with Dropbox (sort of...it actually makes a symbolic link, which creates a reference to the folder on Dropbox, but the original folder remains outside of Dropbox). MacDropAny also works with many other syncing solutions - go to the website to check it out. It is "donation ware," which means that it is free to try, and if you would like to support the developer (who is a student at Princeton University), you can make a donation via the app. This is well worth it, so that we continue to see great things come from him!

The first thing that you must do is to turn off syncing on ALL computers with which you want to sync MarsEdit. On Dropbox, for example, you can easily pause syncing using the menubar app. Other sync solutions will have similar mechanisms to pause syncing quickly. Once you are certain that all computers have stopped syncing, you can start MacDropAny.

![][image-2]

The interface of MacDropAny attempts to make the process as easy as possible, even for novice users. Just follow the steps! First, you have to choose a folder on your hard drive that you would like to sync. In our case, you want to dive into your user "Library" folder like so: `/Users/<Username>/Library/Application Support/MarsEdit`, where `<Username>` is your own user folder. You may have to hold down the "option" key in the Finder's "Go" menu to access the Library Folder. In the MarsEdit folder, you will note the following structure:

![][image-3]

The four folders that you need to sync are: LocalDrafts, PendingUploads, Posts, and UploadedFiles. I may be missing something crucial, but so far this sync solution seems to be working great with these four folders synced. (Sorry, Daniel, if you are reading this and rolling your eyes). Now that you know the folders to sync, let's get to it! We will start with the LocalDrafts folder. Press the "Choose a Folder" button in the MacDropAny interface, and navigate to the MarsEdit folder in the user Library as above. Choose the LocalDrafts folder, and go to step 2. Make sure that MacDropAny is set to sync with Dropbox (unless you would like to use another sync service that MacDropAny supports). MacDropAny will then set up a folder in Dropbox with which you can sync the LocalDrafts folder. By default, MacDropAny suggests a folder in the main (top level) Dropbox folder. 

![][image-4]

You can either accept the default, or you can use the "Set Folder Name and Location..." button to sync LocalDrafts with a different location in your Dropbox folder. I keep all of my app syncing solutions in a folder called "Apps" in Dropbox, but you can do whatever works for you. When you are sure that everything looks right, press the "Sync" button in the lower right corner of the MacDropAny screen, and you are all set!

![][image-5]

When you sync a folder, MacDropAny creates a symbolic link in Dropbox that looks like this (note the folders with the arrows - I have my Documents and Downloads folders synced between my computers as well):

![][image-6]

This folder serves a reference to the original LocalDrafts folder that still resides in the user Library. If you delete or move this folder, the link will be broken, and syncing will no longer occur. In fact, this is exactly how the help section of MacDropAny suggests to stop syncing. If you make a mistake and put the linked folder in the wrong place using MacDropAny, all you have to do is delete the linked folder and go through the steps in MacDropAny as outlined above. This bears repeating: Do not move a symbolic linked folder, or the link will break. Delete the folder and start the process again. 

Now all you have to do is repeat these steps with the remaining three folders: PendingUploads, Posts, and UploadedFiles. To keep things organized, you can tell MacDropAny to place the linked folders in the same folder as LocalDrafts. You are now done with your first computer.

Now you have to repeat the process on the second (and third, etc) computer that you would like to sync. Just make sure that the folder in Step 1 is one of the four folders that you want to sync (located in your user Library folder), and that the location of the linked folder is *the exact same folder in your syncing solution (eg, Dropbox) as for the first computer.* To clarify, if your symlinked folder in Dropbox on the first computer is in `/Users/<Username>/Dropbox/LocalDrafts`, make sure you choose the exact same folder path on the second computer. It will be as if you are choosing the same folder again, but remember that this is what you want. If you get an error stating that the folder already exists, the most likely reason is that you forgot to disable syncing on all of your computers prior to starting the process. My advice at this point is to start over at the beginning.

That should be it, and your MarsEdit instances now should be synced. You may have to push "Refresh" on the main MarsEdit interface to see your posts, and they will all be there. Good luck and have fun! 

If you have any questions or feedback, please contact me at [@imichaelhenry][4] on Twitter. Until next time!

[1]:	https://red-sweater.com/marsedit/
[2]:	https://red-sweater.com/
[3]:	http://www.zibity.com/macdropany.html
[4]:	twitter.com/imichaelhenry

[image-1]:	/assets/images/macdropany-main-screen.png "MacDropAny main screen"
[image-2]:	/assets/images/macdropany-start-screen.png "MacDropAny start screen"
[image-3]:	/assets/images/marsedit-file-structure.png "MarsEdit file structure"
[image-4]:	/assets/images/macdropany-ready-screen.png "MacDropAny ready screen"
[image-5]:	/assets/images/success.png "Success"
[image-6]:	/assets/images/dropbox-folder-structure.png "Dropbox folder structure"
