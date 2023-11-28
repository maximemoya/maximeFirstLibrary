import * as fs from 'fs'

export function createFolderSync(folderpath: string) {
    return fs.mkdirSync(folderpath, { recursive: true })
}

const splitFullPath = (fullPath: string) => {
    const splitFilePath = fullPath.split("/")
    let folderpath = ''
    if (splitFilePath.length > 1) {
        for (let index = 0; index < splitFilePath.length; index++) {
            const element = splitFilePath[index];
            if (index < splitFilePath.length - 1) {
                folderpath += element + '/'
            }
        }
    }
    const filename = splitFilePath[splitFilePath.length - 1]
    return {
        folderpath,
        filename
    }
}

export function writeFile(filepath: string, text: string, encoding: BufferEncoding = 'utf-8') {
    const { folderpath } = splitFullPath(filepath)
    createFolderSync(folderpath)
    fs.writeFile(filepath, text, { encoding }, (error) => {
        if (error) {
            console.error(error.name, error.message);
        }
    })
}

export function writeFileSync(filepath: string, text: string, encoding: BufferEncoding = 'utf-8') {
    const { folderpath } = splitFullPath(filepath)
    createFolderSync(folderpath)
    fs.writeFileSync(filepath, text, { encoding })
}

export function readFileSync(filepath: string, encoding: BufferEncoding = 'utf-8') {
    return fs.readFileSync(filepath, { encoding })
}
